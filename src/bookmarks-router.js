const express = require('express')
const uuid = require('uuid')

const store = require('./store')

const bookmarksRouter = express.Router()
const bodyParser = express.json()

bookmarksRouter
    .route('/bookmarks')
    .get((req, res) => {
        res.json(store.bookmarks)
    })
    .post(bodyParser, (req,res) => {
        const {title, url, description, rating} = req.body
        const id = uuid()
        const bookmark = {
            id,
            title,
            url,
            description,
            rating
        }
        store.bookmarks.push(bookmark)
    })

bookmarksRouter
    .route('/bookmarks/:bookmarkId')
    .get((req,res) => {
        const {bookmarkId} = req.params
        const bookmark = store.bookmarks.find(a => a.id == bookmarkId)
        res.join(bookmark)
    })
    .delete((req,res) => {
        const {bookmarkId} = req.params
        const bookmarkIndex = store.bookmarks.find(a => a.id == bookmarkId)
        store.bookmarks.splice(bookmarkIndex, 1)
    })

module.exports = bookmarksRouter