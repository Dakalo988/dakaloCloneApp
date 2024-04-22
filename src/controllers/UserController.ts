import User from "../models/User";

export class UserController {
  static signup(req, res,next) {
 

  const email = req.body.email;
  const password = req.body.password;
  if(!email){
    const error = new Error('Email is required');
    next(error);
  } else if(!password) {
    const error = new Error('password is required');
    next(error);
  }
  // const user = new User({
  //   email,
  //   password
  // })

  // user.save().then((user) => {
  //   res.send(user);
  // })
  // .catch(e => { const err = new Error(e);
  //   next(e);
  // })
    
  

  }


  static test1(req, res, next) {
    console.log("test");
    (req as any).msg = "This is a test";
    next();
  }

  static test2(req, res) {
    res.send((req as any).msg);
  }
}
