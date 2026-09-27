import express from 'express';
// import { UserController } from '../../controllers/User/User';
import { userController } from '../../controllers';
export const router = express.Router({
    strict: true
});
router.post("/", (req, res) => {
    userController.create(req, res);
});
router.get("/", (req, res) => {
    userController.read(req, res);
});
router.patch("/", (req, res) => {
    userController.update(req, res);
});
router.delete("/", (req, res) => {
    userController.delete(req, res);
});
