import { Router } from 'express';
import createController from '../controllers/cardController.js';

const indexRouter = Router();

indexRouter.post('/create-card', createController);

export default indexRouter;