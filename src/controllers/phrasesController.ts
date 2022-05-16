import { Request, Response } from 'express';
import { Phrase } from '../models/Phrase';

export const createPhrases = async (req: Request, res: Response) => {
    let { author, publishing } = req.body;
    let newPhrase = await Phrase.create({ author, publishing });

    res.status(201);
    res.json({ id: newPhrase.id, author, publishing });
}

export const listPhrases = async (req: Request, res: Response) => {
    let list = await Phrase.findAll();

    res.json({ list })
}

export const listOnePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    let phrase = await Phrase.findByPk(id);
    if (phrase) {
        res.json({ phrase })
    } else {
        res.json({ error: "Frase não encontrada!" });
    }
}

export const updatePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    let { author, publishing } = req.body;
    let phrase = await Phrase.findByPk(id);

    if (phrase) {
        phrase.author = author;
        phrase.publishing = publishing;
        await phrase.save();

        res.json({ phrase });
    } else {
        res.json({ error: "Frase inexistente!" });
    }
}

export const deletePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    await Phrase.destroy({ where: { id } });

    res.json({});
}
