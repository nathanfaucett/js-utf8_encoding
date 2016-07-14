utf8 encoding
=======

utf8 encoding/decoding for the browser and node.js

```javascript
var utf8 = require("utf8_encoding");


utf8.stringToBytes("this is a test") === [116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116];
utf8.bytesToString([116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116]) === "this is a test";
```
