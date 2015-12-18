module.exports = function checkUsersValid(goodUsers) {
    'use strict';
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function (submittedUser) {
            return goodUsers.some(function (goodUser) {
                return goodUser.id === submittedUser.id;
            });
        });
    };
};