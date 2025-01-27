import request from 'supertest';

import app from '../../../src/app';
import factory from '../../factory';
import truncate from '../../util/truncate';

describe('Checkin index', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able show all checkin student', async () => {
    const user = await factory.create('User');
    const student = await factory.create('Student');
    const checkin = await factory.create('Checkin', {
      student_id: student.id,
    });

    const response = await request(app)
      .get(`/students/${student.id}/checkins`)
      .set('Authorization', `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(200);
    expect(response.body[0].id).toEqual(checkin.id);
  });
});
