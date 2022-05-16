import { Request, Response } from 'express';

import { Phrase } from '../models/Phrase';

export const ping = (req: Request, res: Response) => {
    res.json({ ping: true });
}

export const random = (req: Request, res: Response) => {
    let numberRandom: number = Math.floor(Math.random() * 10);
    res.json({ number: numberRandom })
}

export const name = (req: Request, res: Response) => {
    let name = req.params.name;
    res.json({ name: name });
}
