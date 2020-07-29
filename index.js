const pretty = require("pretty-format");

module.exports = (...args) => console.log(...args.map((e) => pretty(e)));
