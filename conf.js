// conf.js
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    framework: 'mocha',
    mochaOpts: {
        reporter: "spec",
        slow: 20000
    },
    onPrepare: function() {
        global.isAngularSite = function(flag) {
            browser.ignoreSynchronization = !flag;
        };
    }
};
