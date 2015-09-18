'use strict';
module.exports = {
    options: {
        paths: ['.', 'client'],
        compress: false
    },
    dev: {
        files: {
            'dev/assets/style.css': [
                'node_modules/norman-*/**/*.less',

                '!node_modules/norman-common-client/**/*.less',

                'node_modules/norman-client-tp/node_modules/angular-sap-ui-elements/styles/base.less',

                'client/**/*.less',
                '!node_modules/norman-*/node_modules/**/*.less',
                'node_modules/norman-client-tp/node_modules/angular-sap-*/**/*.less',
                '!node_modules/norman-client-tp/node_modules/angular-sap-ui-elements/node_modules/**/*.less'


            ]
        }
    }

};
