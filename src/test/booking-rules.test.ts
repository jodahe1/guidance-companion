import { describe, expect, it } from "vitest";
import { validateStay } from "@/components/site/Forms";

describe("booking inquiry dates", () => {
  it("rejects check-out on the same day as check-in", () => {
    expect(validateStay({ checkIn: "2030-05-10", checkOut: "2030-05-10" }, "2030-01-01").checkOut).toBeDefined();
  });
  it("rejects check-in in the past", () => {
    expect(validateStay({ checkIn: "2029-12-31", checkOut: "2030-01-05" }, "2030-01-01").checkIn).toBeDefined();
  });
  it("accepts check-out after check-in", () => {
    expect(validateStay({ checkIn: "2030-05-10", checkOut: "2030-05-12" }, "2030-01-01")).toEqual({});
  });
});
