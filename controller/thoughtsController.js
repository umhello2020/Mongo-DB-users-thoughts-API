const Thought = require('../models/Thought');

module.exports = {
    // get all Thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get a single thought
    async getSingleThought(req, res) {
        try {
            // use id to find the thought
            const thought = await Thought.findById(req.params.thoughtid);

            if(!thought) {
                return res.status(404).json({ message: 'Sorry, could not find a thought with that ID.'});
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a thought
    async createThought(req, res) {
        try {
            // create the thought
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // update an existing thought
    async updateThought(req, res) {
        try {
            // shorthand method combining findOneAndUpdate() and findById()
            const thought = await Thought.findByIdAndUpdate(
                req.params.thoughtid, // ID of the thought we wish to update
                { $set: req.body }, // using the `$set` operator to assign the designated fields in the document to the corresponding values in req.body
                { new: true } // used to asure that the document is returned after the update and not before
            );
            // make sure we have a thought to update
            if (!thought) {
                return res.status(404).json({ message: 'Sorry, could not find a thought with that ID.'});
            };
            res.json(thought)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete an existing thought 
    async deleteThought(req, res) {
        try {
            // first find the thought we wish to delete
            const thought = await Thought.findOneAndRemove(req.params.thoughtid);
            // make sure the thought exists
            if (!thought) {
                return res.status(404).json({ message: 'Sorry, could not find a thought with that ID.'});
            };
            res.json({ message: 'Thought successfully deleted!'});
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // add reaction to a thought
    async addThoughtReaction(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.thoughtid, // ID of the thought who is adding a reaction
                { $addToSet: { reactions: req.body } }, // we use the `$addToSet` operator to add the reactionId into the reaction array
                { new: true }
            );

            res.status(200).json(thought); // sends the thought object in JSON format as the response body with status code of 200, meaning OK
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete a reaction from a thought
    async deleteThoughtReaction(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.thoughtid, // ID of the thought who is removing a reaction
                { $pull: { reactions: { reactionId: req.params.reactionId } } }, // we use the `$pull` operator to remove all instances of the reaction ID from the reaction array
                { new: true }
            );

            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
  