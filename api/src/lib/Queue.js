import Bee from 'bee-queue';

import redisConfig from '../config/redis';

import AnswerMail from '../app/jobs/AnswerMail';
import HelpOrderMail from '../app/jobs/HelpOrderMail';
import WelcomeMail from '../app/jobs/WelcomeMail';

const jobs = [WelcomeMail, HelpOrderMail, AnswerMail];

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save();
  }

  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      bee.on('failed', this.handleFailure).process(handle);
    });
  }

  handleFailure(job, err) {
    console.log(`Queue ${job.queue.name}: FAILED`, err);
  }
}

export default new Queue();
