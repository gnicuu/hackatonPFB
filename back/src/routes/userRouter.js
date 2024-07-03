import express from "express";
import Joi from "joi";

import {
  userRegisterController,
  validateUserController,
  loginUserController,
  editUserPasswordController,
} from "../controllers/users/index.js";

import {
  userExists,
  authUser,
  validator,
  authAdmin,
} from "../middlewares/index.js";
import uploadFiles from "../middlewares/uploadFiles.js";

import listTechnologies from "../controllers/entries/technologyListController.js";

const router = express.Router();

// Joi validado hasta /tecnologias, users/password por arreglar
router
  .post("/users/register", userRegisterController)
  .get("/users/validate/:registrationCode", validateUserController)
  .post("/users/login", loginUserController)
  .put("/users/edit-password", editUserPasswordController)
  .post("/upload", uploadFiles)
  .get("/technologies", listTechnologies);

export default router;
