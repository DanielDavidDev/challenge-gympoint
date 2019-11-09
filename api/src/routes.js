import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import EnrollmentController from './app/controllers/EnrollmentController';

import authMiddleware from './app/middlewares/auth';

import validationUserStore from './app/validators/User/Store';
import validationSessionStore from './app/validators/Session/Store';
import validationStudentStore from './app/validators/Student/Store';
import validationStudentUpdate from './app/validators/Student/Update';
import validationPlanStore from './app/validators/Plan/Store';
import validationPlanUpdate from './app/validators/Plan/Update';
import validationEnrollmentStore from './app/validators/Enrollment/Store';
import validationEnrollmentUpdate from './app/validators/Enrollment/Update';

const routes = Router();

// User and Session
routes.post('/users', validationUserStore, UserController.store);
routes.post('/sessions', validationSessionStore, SessionController.store);

// Middleware for authenticate
routes.use(authMiddleware);

// Student
routes.post('/students', validationStudentStore, StudentController.store);
routes.put(
  '/students/:student_id',
  validationStudentUpdate,
  StudentController.update
);

// Plan
routes.get('/plans', PlanController.index);
routes.get('/plans/:id', PlanController.show);
routes.post('/plans', validationPlanStore, PlanController.store);
routes.put('/plans/:id', validationPlanUpdate, PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

// Enrollment
routes.get('/enrollment', EnrollmentController.index);
routes.get('/enrollment/:id', EnrollmentController.show);
routes.post(
  '/enrollment/:student_id/student',
  validationEnrollmentStore,
  EnrollmentController.store
);
routes.put(
  '/enrollment/:student_id/student',
  validationEnrollmentUpdate,
  EnrollmentController.update
);
routes.delete('/enrollment/:id', EnrollmentController.delete);

export default routes;
