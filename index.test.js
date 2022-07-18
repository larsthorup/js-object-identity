import { describe, expect, it } from "vitest";
import { getObjectId } from "./index.js";

describe("getObjectId", () => {
  describe("when same object", () => {
    it("should return equal object ids", () => {
      const obj1 = { some: "object" };
      const obj2 = obj1;
      expect(getObjectId(obj1)).toEqual(getObjectId(obj2));
    });
  });
  describe("when different objects", () => {
    it("should return different object ids", () => {
      const obj1 = { some: "object" };
      const obj2 = { some: "object" };
      expect(getObjectId(obj1)).not.toEqual(getObjectId(obj2));
    });
  });
});
