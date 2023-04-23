const User = require('../models/User');

module.exports = {
    // get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get a single user
    async getSingleUser(req, res) {
        try {
            // use id to find the user
            const user = await User.findById(req.params.userId);

            if(!user) {
                return res.status(404).json({ message: 'Sorry, could not find a user with that ID.'});
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a user
    async createUser(req, res) {
        try {
            // create the user
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // update an existing user
    async updateUser(req, res) {
        try {
            // shorthand method combining findOneAndUpdate() and findById()
            const user = await User.findByIdAndUpdate(
                req.params.id, // ID of the user we wish to update
                { $set: req.body }, // using the `$set` operator to assign the designated fields in the document to the corresponding values in req.body
                { new: true } // used to asure that the document is returned after the update and not before
            );
            // make sure we have a user to update
            if (!user) {
                return res.status(404).json({ message: 'Sorry, could not find a user with that ID.'});
            };
            res.json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete an existing user 
    async deleteUser(req, res) {
        try {
            // first find the user we wish to delete
            const user = await User.findById(req.params.id);
            // make sure the user exists
            if (!user) {
                return res.status(404).json({ message: 'Sorry, could not find a user with that ID.'});
            };
            // then remove the user
            await user.remove();
            res.json({ message: 'User successfully deleted!'});
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // add a friend to a user
    async addUserFriend(req, res) {
        try {
            const user = await User.findByIdAndUpdate(
                req.params.userId, // ID of the user who is adding a friend
                { $addToSet: { friends: req.params.friendId } }, // we use the `$addToSet` operator to add the friendId into the friend array
                { new: true }
            );

            res.status(200).json(user); // sends the user object in JSON format as the response body with status code of 200, meaning OK
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // remove a friend from a user
    async deleteUserFriend(req, res) {
        try {
            const user = await User.findByIdAndUpdate(
                req.params.userId, // ID of the user who is removing a friend
                { $pull: { friends: req.params.friendId } }, // we use the `$pull` operator to remove all instances of the friend ID from the friend array
                { new: true }
            );

            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

