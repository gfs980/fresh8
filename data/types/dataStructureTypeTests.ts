import { UserInterface } from './UserTypes';

type ForeachUserFncInt = (user: UserInterface[]) => void;

export const testUsersArray:ForeachUserFncInt = (users) => {
  expect(Array.isArray(users)).toBe(true);
  expect(users.length).toBeGreaterThan(0);
  users.forEach(user => {
    expect(Object.keys(user)).toStrictEqual(['name', 'email', 'location']);
  });
};
