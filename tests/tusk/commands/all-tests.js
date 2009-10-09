
var assert = require("test/assert");
var util = require("util");

exports.testSeaCommands = require("./sea/all-tests");
exports.testPackageCommands = require("./package/all-tests");

if (require.main === module.id)
    require("os").exit(require("test/runner").run(exports));
