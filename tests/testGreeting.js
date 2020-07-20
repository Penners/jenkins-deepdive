const { describe } = require("mocha");
const assert = require("assert");

const greeting = require("../lib/greeting");
const math = require("../math");

describe("Greeting Test Suite:", function () {
  it("Given the name John, greeting should return hello John", function () {
    assert(greeting("John") === "Hello John");
  });
});

describe("Simple test suite:", function () {
  it("Given the name John, greeting should return hello John", function () {
    assert(greeting("John") === "Hello John");
  });
});
