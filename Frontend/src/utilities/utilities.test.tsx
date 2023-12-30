import { describe, it, expect } from "vitest";
import { getImageForBrand } from "./brandImageMapper";

/**
 * @test Unit testing for images for car brands
 * @description Basic test to show understanding of unit testing
 */

describe("check if getImageForBrand works", () => {
  it("image correctly assigned to brand", () => {
    expect(getImageForBrand("BMW")).toBeTypeOf("string");
  });

  it("image not assignable to non-existing car brand", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(getImageForBrand("Citroen")).toBeTypeOf("undefined");
  });
});
