import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

import Queue from '../../lib/Queue';

import HelpOrderMail from '../jobs/HelpOrderMail';

class HelpOrderController {
  async index(req, res) {
    const { student_id } = req.params;

    const helpOrder = await HelpOrder.findAll({
      where: {
        student_id,
      },
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return res.json(helpOrder);
  }

  async store(req, res) {
    const { student_id } = req.params;
    const { question } = req.body;

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res
        .status(400)
        .json({ error: { message: 'Student does not exists' } });
    }

    const helpOrder = await HelpOrder.create({
      student_id,
      question,
    });

    await Queue.add(HelpOrderMail.key, {
      student,
      helpOrder,
    });

    return res.json(helpOrder);
  }
}

export default new HelpOrderController();
