import { body } from "express-validator";

export class UserValidators {
  static signup() {
    return [
      body("name", "Name is required").isString(),
      body("phone", "phoneNumber is required").isString(),
      body("email", "Email is required").isEmail(),
      body("password", "Password is required")
        .isAlphanumeric()
        .isLength({ min: 8, max: 25 })
        .withMessage("Password must be between 8-20 characters"),
      body("type", "User role type is required").isString(),
      body("status", "User status is required").isString(), 
    ];
  }
}
