const User = require('../models/User');

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addUserFriend(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUserFriend(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    }
}