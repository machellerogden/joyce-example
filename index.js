'use strict';
const globble = require('globble');
const Joyce = require('Joyce');

(async () => {
    const data = await globble('./config/**', { cwd: __dirname, clobber: true });
    console.log(Joyce(data));
})();
