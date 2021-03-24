import {findUserByName, registersUsers} from '../dataReader';
import { testUsersArray } from '../types/dataStructureTypeTests';
import {UserInterface} from "../types/UserTypes";

describe('testing the dataReader', () => {
  it('testing users data if returns correct format', () => {
    testUsersArray(registersUsers);
  });
});

describe('testing the findUserByName', () => {
  it('should return list of users matched by mi', () => {
    const users:UserInterface[] = findUserByName('mi');
    expect(users.length).toBeGreaterThan(0);
    const regex = new RegExp(/\b(\w*mi\w*)\b|\b(\w*Mi\w*)\b/g);
    expect(regex.test(users[0].name)).toBe(true);
  });
});
