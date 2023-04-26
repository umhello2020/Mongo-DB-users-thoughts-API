const router = require('express').Router();

// since all of these variable come from the same controller these will be contained in one const
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addThoughtReaction,
    deleteThoughtReaction
} = require('../../controller/thoughtsController');

// route for all thoughts
router.route('/').get(getThoughts).post(createThought);

// route for specific thoughts
router
    .route('/:thoughtid')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// route to add thought reaction
router.route('/:thoughtid/reactions').post(addThoughtReaction);

// route to delete a thought reaction, it is separate from the create route since it requires a reactionId
router.route('/:thoughtid/reactions/:reactionId').delete(deleteThoughtReaction);

module.exports = router;