const Thought = require('../models/Thought');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });

            
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    }, 
    async deleteThought(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addThoughtReaction(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThoughtReaction(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    }
}