import { Router } from "express";

import {
  createUser,
  getUsers,
  updateUser,
  deleteUser
} from "../controllers/user.controller.js";

import { validate } from "../middleware/validate.middleware.js";

import {
  createUserSchema,
  updateUserSchema,
  userIdSchema
} from "../schemas/user.schema.js";

const router = Router();

router.post(
  "/",
  validate(createUserSchema),
  createUser
);

router.get(
  "/",
  getUsers
);

router.put(
  "/:userId",
  validate(updateUserSchema),
  updateUser
);

router.delete(
  "/:userId",
  validate(userIdSchema),
  deleteUser
);

export default router;
