import type { NextApiRequest, NextApiResponse } from 'next';
import {findUserByName, registersUsers} from "../../data/dataReader";
import {UserInterface} from "../../data/types/UserTypes";

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const {name} = req.query;
        if(name) {
            const searchedName:string = name.toString();
            const matchedSites:UserInterface[] = findUserByName(searchedName);
            res.status(200).json(matchedSites);
        }
        else {
            res.status(200).json(registersUsers);
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
