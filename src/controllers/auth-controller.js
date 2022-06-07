import {
  comparePassword,
  createAccessToken,
  hashPassword,
  prisma,
} from "../helpers/utils.js";

export const signup = async (req, reply) => {
  const { name, email, usuario, password: pass } = req.body;

  try {
    const password = await hashPassword(pass);

    const { password: hashedPassword, ...user } = await prisma.user.create({
      data: {
        name,
        email,
        password,
        usuario
      },
    });

    reply.send(user);
  } catch (error) {
    console.log(error);
    reply.status(400).send({ error: `User already exists!` });
  }
};

export const login = async (req, reply) => {
  try {
    const { email, password } = req.body;
    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
<<<<<<< HEAD
      return reply.status(401).send({ error: "Email ou Senha Invalido" });
    }

    if (!(await comparePassword(password, user.password))) {
      return reply.status(401).send({ error: "Email ou Senha Invalido" });
=======
      return reply.status(401).send({ error: "Invalid email or password 1" });
    }

    if (!(await comparePassword(password, user.password))) {
      return reply.status(401).send({ error: "Invalid email or password 2" });
>>>>>>> 67cbe55dd7affe263494582e3c9f55f7191fc85f
    }

    let { password: pass, ...data } = user;
    return reply.send({
      user: data,
      accessToken: await createAccessToken(data),
    });
  } catch (error) {
    console.log(error);
    reply.status(500).send({ error: "Server error!" });
  }
};
