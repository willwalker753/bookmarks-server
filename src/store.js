const { v4: uuidv4 } = require('uuid');


const bookmarks = [
  {
    id: uuidv4(),
    title: "Fluffy Cat",
    url: "amazon.com",
    description: "A big fluffy cat.",
    rating: "5/5"
  }
]

module.exports = { bookmarks }