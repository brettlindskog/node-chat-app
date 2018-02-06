const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message.js')

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'user';
        var latitude = 7;
        var longitude = 7;
        var url = 'https://www.google.com/maps?q=7,7'
        var locationMessage = generateLocationMessage(from, latitude, longitude);
        expect(locationMessage.createdAt).toBeA('number');
        expect(locationMessage).toInclude({ from, url });
    });
});