import { Router } from "express";
import * as ApiController from '../controllers/apiController';
import * as PhrasesController from '../controllers/phrasesController';

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/nome/:nome', ApiController.name);

//router.post('/frases', ApiController.createPhrases);
//router.post('/frases', PhrasesController.createPhrases)

export default router;