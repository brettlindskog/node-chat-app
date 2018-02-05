const expect = require('expect');
const { generateMessage } = require('./message.js')

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var message = generateMessage('me', 'text goes here');
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from: 'me',
            text: 'text goes here'
        });
    });
});