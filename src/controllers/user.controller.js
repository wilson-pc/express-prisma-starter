import { saveUser, getUserById, getUsers } from '../services';

export async function getProfile(req, res) {
  try {
    const user = await getUserById(req.user.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(501).send({ message: error.message });
  }
}

export async function registerUser({ body }, res) {
  try {
    const user = await saveUser(body);
    res.status(200).send(user);
  } catch (error) {
    res.status(501).send({ message: error.message });
  }
}

export async function findUsers(req, res) {
  try {
    const users = await getUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(501).send({ message: error.message });
  }
}
