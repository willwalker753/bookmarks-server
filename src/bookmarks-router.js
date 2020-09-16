const express = require('express')
const { v4: uuidv4 } = require('uuid');
const store = require('./store')

const bookmarksRouter = express.Router()
const bodyParser = express.json()



bookmarksRouter
    .route('/')
    .get((req, res) => {
        try {
            res.json(store.bookmarks);
        }
        catch {
            res.json('Server Error');
        }   
    })
    .post(bodyParser, (req,res) => {
        const { title, url, description, rating } = req.body;
        const id = uuidv4();
        const bookmark = { id, title, url, description, rating } 
        store.bookmarks.push(bookmark);
        res.status(201)
        res.json(`Post id: ${id}`);
    })

bookmarksRouter
    .route('/:id')
    .get((req,res) => {
        const bookmarkId = req.params.id;
        const bookmark = store.bookmarks.find(a => a.id == bookmarkId);
        if(bookmark == undefined) {
            res.status(404);
            res.json('No bookmark found');
        }
        else {
            res.json(bookmark);
        }
        
    })
    .delete((req,res) => {
        const bookmarkId = req.params.id;
        const bookmarkIndex = store.bookmarks.find(a => a.id == bookmarkId);
        store.bookmarks.splice(bookmarkIndex, 1);
        if(bookmarkIndex === undefined) {
            res.status(404);
            res.json('No bookmark found');
        }
        else {
            res.json('Delete Success')
        }
    })

module.exports = bookmarksRouter;