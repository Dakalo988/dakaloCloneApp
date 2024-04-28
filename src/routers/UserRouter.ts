import { Router } from "express";
import { UserController } from "../controllers/UserController";
import {  validationResult } from "express-validator";
import { UserValidators } from "../validators/UserValidators";
class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.patchRoutes();
    this.putRoutes();
    this.deleteRoutes();
  }

  getRoutes() {}

  postRoutes() {
    this.router.post(
      "/signup",UserValidators.signup(),

      UserController.signup
    );
  }
  patchRoutes() {}
  putRoutes() {}
  deleteRoutes() {}
}

export default new UserRouter().router;
