import { Router } from "express";
import { createCard, getAllCards, getSingleCard } from "../Controllers/cardController.js";
import { validateCreateCardInputs} from "../middlewares/validationHandlerMiddleware.js";
const router = Router();

router.route("/cards").post(validateCreateCardInputs,createCard).get(getAllCards);
router.route("/cards/:title").get(getSingleCard);

export default router;