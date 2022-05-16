import { Router } from 'express';
import * as PhrasesController from '../controllers/phrasesController';

const router = Router();

router.post('/frases', PhrasesController.createPhrases);
router.get('/frases', PhrasesController.listPhrases);
router.get('/frase/random', PhrasesController.randomPhrase);
router.get('/frase/:id', PhrasesController.listOnePhrase);
router.put('/frase/:id', PhrasesController.updatePhrase);
router.delete('/frase/:id', PhrasesController.deletePhrase);

export default router;

