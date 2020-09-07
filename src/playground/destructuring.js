const book = {
    title: 'good morning',
    autho: 'Ryan',
    publisher: {
        // name: 'Penguin'
    }
}

const { name: publisherName = 'Self-made' } = book.publisher;

console.log(publisherName)