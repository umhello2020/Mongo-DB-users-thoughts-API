const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addUserFriend,
    deleteUserFriend
} = require('../../controller/userController');


router.route('/').get(getUsers).post(createUser);


router.route('/:userid').get(getSingleUser).put(updateUser).delete(deleteUser);


router.route('/:userid/friends/:friendid').post(addUserFriend).delete(deleteUserFriend);

module.exports = router;