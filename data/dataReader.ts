import UserJson from './sample_data.json';
import {UserInterface} from "./types/UserTypes";
export const registersUsers = UserJson;

export const findUserByName = (searchedName:string):UserInterface[] => {
    const nameCapitalized:string = searchedName.charAt(0).toUpperCase() + searchedName.slice(1);
    const regex = new RegExp(`(w*${searchedName}w*)|(w*${nameCapitalized}w*)`);
    return registersUsers.filter(user => regex.test(user.name));
};
