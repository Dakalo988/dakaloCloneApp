import User from "../models/User";
import { validationResult } from "express-validator";

export class UserController {
  static async signup(req, res, next) {
    const errors = validationResult(req);
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const type = req.body.type;
    const status = req.body.status;

    if (!errors.isEmpty()) {
      next(new Error(errors.array()[0].msg));
    }

    const data = {
      email,
      phone,
      password,
      name,
      type,
      status,
    };

    try {
      let user = await new User(data).save();
      res.send(user);
    } catch (e) {
      next(e);
    }

    // user
    //   .save()
    //   .then((user) => {
    //     res.send(user);
    //   })
    //   .catch((e) => {
    //     const err = new Error(e);
    //     next(e);
    //   });
  }
}
