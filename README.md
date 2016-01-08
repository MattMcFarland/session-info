# A middleware that console.logs the current session info

[![npm](https://img.shields.io/npm/v/session-info.svg)](https://www.npmjs.com/package/session-info)
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://travis-ci.org/MattMcFarland/session-info)
[![Coverage Status](https://coveralls.io/repos/MattMcFarland/session-info/badge.svg?branch=master&service=github)](https://coveralls.io/github/MattMcFarland/session-info?branch=master)

Express session diagnostic for
[Connect](https://github.com/senchalabs/connect) and
[Express](http://expressjs.com/)

## Compatibility

* Support Express `4.x` and `5.0`
* Support Node.js `0.10`, `0.12`, `4.x`, `5.x` and all [io.js](https://iojs.org) versions


### For use with `express-session`

Express `4.x`, `5.0` and Connect `3.x`:

Once added, you will get information regarding the session like:

- `sessionStore`
- `sessionID`
- `session`

```js
const session = require('express-session');
const info = require('session-info');

app.use(session());
app.use(info());

```



## License

The MIT License
