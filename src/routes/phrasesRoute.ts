import { Router } from 'express';
import * as PhrasesController from '../controllers/phrasesController';

const router = Router();

router.post('/frases', PhrasesController.createPhrases);

export default router;

