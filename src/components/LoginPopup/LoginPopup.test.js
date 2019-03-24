import {
  doesntContainIncreasingStraight,
  containsInvalidChars,
  containsUppercaseLetters,
  isInvalidLength,
  doesntContainsTwoOverlappingPairs
} from "./passwordValidationFunctions";

describe("doesntContainIncreasingStraight", () => {
  describe("invalid passwords", () => {
    [
      "test123",
      "badpassword",
      "09876",
      "acd",
      "@AB",
      "YZ[",
      " `ab",
      "yz{"
    ].forEach(badPassword => {
      it(`should not match password ${badPassword}`, () => {
        expect(doesntContainIncreasingStraight(badPassword)).toEqual(true);
      });
    });
  });
  describe("valid passwords", () => {
    ["abc", "cde", "fgh", "xyz", "ABC", "XYZ"].forEach(goodPassword => {
      it(`should match password ${goodPassword}`, () => {
        expect(doesntContainIncreasingStraight(goodPassword)).toEqual(false);
      });
    });
  });
});

describe("containsInvalidChars (i, O or l)", () => {
  describe("invalid passwords", () => {
    ["HELLO", "bri11iant", "loll-pop"].forEach(badPassword => {
      it(`should match password ${badPassword}`, () => {
        expect(containsInvalidChars(badPassword)).toEqual(true);
      });
    });
  });
  describe("valid passwords", () => {
    ["HELLo", "brI11Iant", "LoLL-pop"].forEach(goodPassword => {
      it(`should not match password ${goodPassword}`, () => {
        expect(containsInvalidChars(goodPassword)).toEqual(false);
      });
    });
  });
});

describe("doesntContainsTwoOverlappingPairs (aa, bb, cc)", () => {
  describe("invalid passwords", () => {
    ["aaab", "test", "loll-pop"].forEach(badPassword => {
      it(`should match password ${badPassword}`, () => {
        const result = doesntContainsTwoOverlappingPairs(badPassword);
        expect(result).toEqual(true);
      });
    });
  });
  describe("valid passwords", () => {
    ["hello worrld", "aaaa", "aabb", "aa bb cc"].forEach(goodPassword => {
      it(`should not match password ${goodPassword}`, () => {
        expect(doesntContainsTwoOverlappingPairs(goodPassword)).toEqual(false);
      });
    });
  });
});

describe("isInvalidLength", () => {
  it(`should match password over the length`, () => {
    const longPassword = Array.from({ length: 500 })
      .map(() => "b")
      .join("");
    expect(isInvalidLength(longPassword)).toEqual(true);
  });
  it(`should not match password under the length`, () => {
    const longPassword = Array.from({ length: 10 })
      .map(() => "b")
      .join("");
    expect(isInvalidLength(longPassword)).toEqual(false);
  });
});

describe("containsUppercaseLetters", () => {
  it(`should match password with uppercase letters`, () => {
    expect(containsUppercaseLetters("HELLOOOO")).toEqual(true);
  });
  it(`should not match password with no uppercase letters`, () => {
    expect(containsUppercaseLetters("hi")).toEqual(false);
  });
});
