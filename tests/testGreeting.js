const { describe } = require("mocha");
const assert = require("assert");

const greeting = require("../lib/greeting");

describe("Greeting Test Suite:", function () {
  it("Given the name John, greeting should return hello John", function () {
    assert(greeting("John") === "Hello John");
  });
});
