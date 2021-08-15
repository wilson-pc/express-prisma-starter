import express from 'express';
import { validator, authGuard } from '../middlewares';
import { getProfile, registerUser, findUsers } from '../controllers';
import { userRegisterDto } from '../dto';

const router = express.Router();

router.get('/', findUsers);
router.get('/profile', authGuard(), getProfile);

router.post('/', validator(userRegisterDto), registerUser);

export default router;
