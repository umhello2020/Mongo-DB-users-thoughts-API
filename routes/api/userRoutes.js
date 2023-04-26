const router = require('express').Router();

// all of these variables will reference the same controller so they are being grouped together
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addUserFriend,
    deleteUserFriend
} = require('../../controller/userController');

// get and post users
router.route('/').get(getUsers).post(createUser);

// get, update, and delete a specific user
router.route('/:userid').get(getSingleUser).put(updateUser).delete(deleteUser);

// add a friend and delete them from a specific user's friend list
router.route('/:userid/friends/:friendid').post(addUserFriend).delete(deleteUserFriend);

module.exports = router;