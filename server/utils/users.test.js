const expect = require('expect');
const { Users } = require('./users.js');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'brett',
            room: 'lotr'
        }, {
            id: '2',
            name: 'vanessa',
            room: 'outlander'
        }, {
            id: '3',
            name: 'john',
            room: 'lotr'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'brett',
            room: 'lotr'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should return names for lotr room', () => {
        var userList = users.getUserList('lotr');
        expect(userList).toEqual(['brett', 'john']);
    });

    it('should return names for outlander room', () => {
        var userList = users.getUserList('outlander');
        expect(userList).toEqual(['vanessa']);
    });

    it('should remove a user', () => {
        var userId = '3';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '7';
        var user = users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '3';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '7';
        var user = users.getUser(userId);
        expect(user).toNotExist();
    });
});