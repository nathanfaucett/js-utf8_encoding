var tape = require("tape"),
    utf8Encoding = require("..");


tape("utf8Encoding#stringToBytes(str)", function(assert) {
    assert.deepEqual(
        utf8Encoding.stringToBytes("this is a test"), [116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116],
        "should return string to bytes"
    );
    assert.end();
});

tape("utf8Encoding#bytesToString(bytes)", function(assert) {
    assert.deepEqual(
        utf8Encoding.bytesToString([116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116]),
        "this is a test",
        "should return bytes to string"
    );
    assert.end();
});
