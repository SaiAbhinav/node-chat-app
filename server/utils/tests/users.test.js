const expect = require('expect');

const { Users } = require('./../users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Sai',
            room: 'Angular Course'
        }, {
            id: '3',
            name: 'Abhinav',
            room: 'Node Course'
        }];
    });

    it('should add new user', () => {   
        var users = new Users();     
        var user = {
            id: '123',
            name: 'Abhinav',
            room: 'The Office Fans'
        };        
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
        expect(resUser).toMatchObject(user);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);        
    });

    it('should not remove user', () => {
        var userId = '123';
        var user = users.removeUser(userId);
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '123';
        var user = users.getUser(userId);
        expect(user).toBeFalsy();
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike', 'Abhinav']);
    });

    it('should return names for angular course', () => {
        var userList = users.getUserList('Angular Course');
        expect(userList).toEqual(['Sai']);
    });
});