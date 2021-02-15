var exec = require('cordova/exec');

exports.requestPermissions = function (arg0, success, error) {
    exec(success, error, 'GoogleExposureNotifications', 'requestPermissions', []);
};

exports.start = function (arg0, success, error) {
    exec(success, error, 'GoogleExposureNotifications', 'start', [arg0]);
};

exports.stop = function (arg0, success, error) {
    exec(success, error, 'GoogleExposureNotifications', 'stop', [arg0]);
};