var assert = require("assert"),
    utf8 = require("../src/index");


describe("utf8_encoding", function() {
    describe("#stringToBytes(str)", function() {
        it("should return string to bytes", function() {
            assert.deepEqual(
                utf8.stringToBytes("this is a test"), [116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116]
            );
        });
    });
    describe("#bytesToString(bytes)", function() {
        it("should return bytes to string", function() {
            assert.deepEqual(
                utf8.bytesToString([116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116]),
                "this is a test"
            );
        });
    });
});
