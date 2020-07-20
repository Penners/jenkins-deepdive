const { describe } = require("mocha");
const assert = require("assert");
const math = require("../math");

describe("Math test suite:", function () {
  it("Given two numbers, the function math should return the sum", function () {
    assert(math(5, 7) === 12);
  });
});
