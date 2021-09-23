import { response, Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createcomplimentController = new CreateComplimentController();

router.post("/createUser", createUserController.handle);
router.post("/createTag", ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/createCompliment", createcomplimentController.handle);

export { router }