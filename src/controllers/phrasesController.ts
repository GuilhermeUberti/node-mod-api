import { Request, Response } from 'express';
import { Phrase } from '../models/Phrase';

export const createPhrases = async (req: Request, res: Response) => {
    let { author, publishing } = req.body;

    let newPhrase = await Phrase.create({ author, publishing });

    res.json({ id: newPhrase.id, author, publishing });
}

