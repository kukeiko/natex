import "../src/array";

describe("array", () => {
    it("_flatten()", () => {
        let a = [[1], [2], [3]];

        let r = a._flatten();

        expect(r).toEqual([1, 2, 3]);
        expect(r).not.toBe(a);
    });

    it("_intersect()", () => {
        let a = [0, 64, 1, 2];
        let b = [2, 1, 64, 3]
        let c = [2, 0, 64];

        let r = a._intersect(b, c);

        expect(r).toEqual([64, 2]);
        expect(r).not.toBe(a);
    });

    it("_minus()", () => {
        let a = [0, "1", { khaz: "mo" }, "dan", "wallaby"];
        let b = ["1", 0, "foo", { khaz: "mo" }];
        let c = ["wallaby"];

        let r = a._minus(b, c);

        expect(r).toEqual([{ khaz: "mo" }, "dan"]);
        expect(r).not.toBe(a);
    });

    it("_unique()", () => {
        let a = [2, 0, 1, 1, 2, 0];

        let r = a._unique();

        expect(r).toEqual([2, 0, 1]);
        expect(r).not.toBe(a);
    });
});