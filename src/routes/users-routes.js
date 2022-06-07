import { validateRequest } from "../middleware/auth.js";
import * as UserController from "../controllers/user-controller.js";

export default {
  getAllUsers: {
    method: "GET",
    url: "/users",
    // preHandler: [validateRequest],
    handler: UserController.index,
  },

  postAllUsers: {
    method: "POST",
    url: "/post",
    preHandler: [validateRequest],
    handler: UserController.index,
  },
};
