'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scope = require('@dekproject/scope');

var _mail = require('@sendgrid/mail');

var _mail2 = _interopRequireDefault(_mail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    try {
        if (!process.env.hasOwnProperty('SENDGRID_API_KEY')) {
            console.log('[ SendGrid ] - There is no SENDGRID_API_KEY variable in the .env file.');
        } else {
            _mail2.default.setApiKey(process.env.SENDGRID_API_KEY);
            _scope.$.set("sendgrid", _mail2.default);
        }
    } catch (e) {
        console.log('[ SendGrid ] - ' + e.message);
    }
};
//# sourceMappingURL=index.js.map