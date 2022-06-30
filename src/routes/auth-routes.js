import * as AuthController from "../controllers/auth-controller.js";
import { validateRequest } from "../middleware/auth.js";

export default {
  signup: {
    method: "POST",
    url: "/signup",
    handler: AuthController.signup,
  },
  login: {
    method: "POST",
    url: "/login",
    preHandler: [validateRequest],
    handler: AuthController.login,
  },

};
