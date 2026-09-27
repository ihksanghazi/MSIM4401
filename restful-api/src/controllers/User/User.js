import { CrudController } from '../CrudController';
import userjson from '../../resources/users.json';
export class UserController extends CrudController {
    create(req, res) {
        throw new Error("Belum diimplementasikan");
    }
    read(req, res) {
        res.json(userjson);
    }
    update(req, res) {
        throw new Error("Belum diimplementasikan");
    }
    delete(req, res) {
        throw new Error("Belum diimplementasikan");
    }
}
