import express from 'express';
import { validator } from '../middlewares';
import { loginUser } from '../controllers';
import { loginDto } from '../dto';

const router = express.Router();

router.post('/login', validator(loginDto), loginUser);

export default router;
