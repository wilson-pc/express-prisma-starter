import { StatusCodes } from 'http-status-codes';
import { verify } from 'jsonwebtoken';

export function authGuard() {
  // eslint-disable-next-line func-names
  return function (req, res, next) {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        message: 'There is no token provided!',
      });
    }

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
      try {
        const { data } = verify(token, process.env.JWT_SECRET);

        req.user = data;
        next();
        return true;
      } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).send({
          message: 'Token is no valid',
        });
      }
    } else {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        message: 'Invalid token format',
      });
    }
  };
}
