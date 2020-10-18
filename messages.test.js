const Messages = require('./Messages');

describe('Messages', () => {
    test('Creates instance', () => {
        const messages = new Messages();
        expect(messages).not.toBeNull();
    });

    test('Creates instance and saves array', () => {
        const messagesArray = [
            {
                message: "Test",
                nick: "Test"
            }
            ];
        const messages = new Messages(messagesArray);
        expect(messages.getMessages()).toEqual(messagesArray);
    });

    test('Creates instance, saves array and deletes element', () => {
        const messagesArray = [
            {
                message: "Test",
                nick: "Test"
            },
            {
                message: "Test1",
                nick: "Test1"
            }
        ];
        const messages = new Messages(messagesArray);
        messages.deleteMessageByIndex(0);
        expect(messages.getMessageByIndex(0)).not.toEqual(messagesArray[0]);
    });

    test('Creates instance and get element', () => {
        const messagesArray = [
            {
                message: "Test",
                nick: "Test"
            },
            {
                message: "Test1",
                nick: "Test1"
            }
        ];
        const messages = new Messages(messagesArray);
        expect(messages.getMessageByIndex(0)).toEqual(messagesArray[0]);
    });

    test('Creates instance and get element', () => {
        const messagesArray = [
            {
                message: "Test",
                nick: "Test"
            },
            {
                message: "Test1",
                nick: "Test1"
            }
        ];
        const messages = new Messages(messagesArray);
        messages.deleteMessages();
        expect(messages.getMessages()).toEqual([]);
    });

    test('Creates instance and fail', () => {
        const messagesArray = [
            {
                message: "Test",
                nick: "Test"
            },
            {
                message: "Test1",
                nick: "Test1"
            }
        ];

        const messages = new Messages();

    });
});