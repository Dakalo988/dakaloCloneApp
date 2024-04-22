import { Router } from "express";
import { UserController } from "../controllers/UserController";

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

  getRoutes() {
    this.router.post("/signup", UserController.signup);

    this.router.get("/test", UserController.signup, UserController.test1,UserController.test2);
  }

  postRoutes() {}
  patchRoutes() {}
  putRoutes() {}
  deleteRoutes() {}
}

export default new UserRouter().router;
