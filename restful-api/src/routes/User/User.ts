import express, {type Request,type Response} from 'express';
// import { UserController } from '../../controllers/User/User';
import { userController } from '../../controllers';

export const router = express.Router({
    strict:true
})

router.post("/",(req: Request, res: Response) => {
    userController.create(req,res)
})

router.get("/",(req: Request, res: Response) => {
    userController.read(req,res)
})

router.patch("/",(req: Request, res: Response) => {
    userController.update(req,res)
})

router.delete("/",(req: Request, res: Response) => {
    userController.delete(req,res)
})