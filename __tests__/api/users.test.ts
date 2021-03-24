import 'regenerator-runtime/runtime';
import { createMocks } from 'node-mocks-http';
import getUsers from '../../pages/api/users';
describe('testing user api', () => {

    it('Should receive all 100 users without query', async () => {
        const { req, res } = createMocks({
            method: 'GET'
        });
        await getUsers(req, res);
        const users = JSON.parse(res._getData());

        expect(res._getStatusCode()).toBe(200);
        expect(users.length).toBe(100);
    });

    it('Should receive all 100 users with empty name query', async () => {
        const { req, res } = createMocks({
            method: 'GET',
            query: {name: ''}
        });
        await getUsers(req, res);
        const users = JSON.parse(res._getData());

        expect(res._getStatusCode()).toBe(200);
        expect(users.length).toBe(100);
    });

    it('Should receive 0 users with array of names', async () => {
        const { req, res } = createMocks({
            method: 'GET',
            query: {name: ['m', 'i']}
        });
        await getUsers(req, res);
        const users = JSON.parse(res._getData());

        expect(res._getStatusCode()).toBe(200);
        expect(users.length).toBe(0);
    });

    it('Should receive all 100 users with random query key', async () => {
        const { req, res } = createMocks({
            method: 'GET',
            query: {search: 'dkgjadkjgad'}
        });
        await getUsers(req, res);
        const users = JSON.parse(res._getData());

        expect(res._getStatusCode()).toBe(200);
        expect(users.length).toBe(100);
    });

    it('Should receive only users with matched mi letters', async () => {
        const { req, res } = createMocks({
            method: 'GET',
            query: {name: 'mi'}
        });
        await getUsers(req, res);
        const users = JSON.parse(res._getData());
        expect(res._getStatusCode()).toBe(200);
        expect(users.length).toBeLessThan(100);
        expect(users.length).toBeGreaterThan(0);
    });

    it('Should receive 0 users with adfhjadhgda search name', async () => {
        const { req, res } = createMocks({
            method: 'GET',
            query: {name: 'adfhjadhgda'}
        });
        await getUsers(req, res);
        const users = JSON.parse(res._getData());
        expect(res._getStatusCode()).toBe(200);
        expect(users.length).toBe(0);
    });
});
