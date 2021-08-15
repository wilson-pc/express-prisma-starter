import { StatusCodes } from 'http-status-codes';
import { validateEmail, login } from '../services';

export async function loginUser({ body }, res) {
  try {
    const { email, password } = body;
    const user = await validateEmail(email);
    if (user) {
      login(user, password)
        .then((data) => {
          res.status(StatusCodes.ACCEPTED).send(data);
        })
        .catch((error) => {
          res.status(StatusCodes.UNAUTHORIZED).send({ message: error.message });
        });
    } else {
      res
        .status(StatusCodes.UNAUTHORIZED)
        .send({ message: 'User or password incorect' });
    }
  } catch (error) {
    res.status(501).send({ message: error.message });
  }
}
