/* global describe, it */
"use strict";

const assert = require("assert");
const escape = require(".").escape;
const unescape = require(".").unescape;

var inputs = [
    "string' with' single' quotes",
    'string" with" double" quotes',
    "string` with` back` quotes",
    "string\\ with\\ backslashes",
    "string\b with\b backspaces",
    "string\f with\f from\f feed\f char",
    "string\n with\n new\n line\n char",
    "string\r with\r return\r char",
    "string\t with\t tab\t char",
    "string\u2028 with\u2028 unicode\u2028 2028",
    "string\u2029 with\u2029 unicode\u2029 2029",
    "a' string\" contains` all\\ characters\b that\f should\n be\r escaped\t, with\u2028 no\u2029 exceptions",
    "a' string\" contains` all\\ characters\b that\f should\n be\r escaped\t, with\u2028 one\u2029 exception",
    "a' string\" contains` all\\ characters\b that\f should\n be\r escaped\t, with\u2028 several\u2029 exceptions",
    "another' string\" contains` all\\ characters\b that\f should\n be\r escaped\t, with\u2028 several\u2029 exceptions"
];
var outputs = [
    "string\\' with\\' single\\' quotes",
    'string\\" with\\" double\\" quotes',
    "string\\` with\\` back\\` quotes",
    "string\\\\ with\\\\ backslashes",
    "string\\b with\\b backspaces",
    "string\\f with\\f from\\f feed\\f char",
    "string\\n with\\n new\\n line\\n char",
    "string\\r with\\r return\\r char",
    "string\\t with\\t tab\\t char",
    "string\\u2028 with\\u2028 unicode\\u2028 2028",
    "string\\u2029 with\\u2029 unicode\\u2029 2029",
    "a\\' string\\\" contains\\` all\\\\ characters\\b that\\f should\\n be\\r escaped\\t, with\\u2028 no\\u2029 exceptions",
    "a' string\\\" contains\\` all\\\\ characters\\b that\\f should\\n be\\r escaped\\t, with\\u2028 one\\u2029 exception",
    "a' string\" contains\\` all\\\\ characters\\b that\\f should\\n be\\r escaped\\t, with\\u2028 several\\u2029 exceptions",
    "another\\' string\" contains` all\\\\ characters\\b that\\f should\\n be\\r escaped\\t, with\\u2028 several\\u2029 exceptions"
];

describe("Escape", () => {
    it("should escape strings and produce expected results", () => {
        for (let i = 0; i < inputs.length; i++) {
            if (i === 12) {
                assert.strictEqual(escape(inputs[i], "'"), outputs[i]);
            } else if (i === 13) {
                assert.strictEqual(escape(inputs[i], "'\""), outputs[i]);
            } else if (i === 14) {
                assert.strictEqual(escape(inputs[i], "\"`"), outputs[i]);
            } else {
                assert.strictEqual(escape(inputs[i]), outputs[i]);
            }
        }
    });
});

describe("Unescape", () => {
    it("should unescape strings and produce expected results", () => {
        for (let i = 0; i < outputs.length; i++) {
            assert.strictEqual(unescape(outputs[i]), inputs[i]);
        }
    });
});
