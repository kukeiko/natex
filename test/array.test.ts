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

    it("_toMap()", () => {
        let a = [{ key: 75, name: "khaz" }, { key: 64, name: "mo" }, { key: 23, name: "dan" }];
        let e = new Map();
        e.set(75, { key: 75, name: "khaz" });
        e.set(64, { key: 64, name: "mo" });
        e.set(23, { key: 23, name: "dan" });

        let r = a._toMap(x => x.key);

        expect(r).toEqual(e);
    });

    it("_toMap() (value mapped)", () => {
        let a = [{ key: 75, name: "khaz" }, { key: 64, name: "mo" }, { key: 23, name: "dan" }];
        let e = new Map();
        e.set(75, { key: 75, name: "khaz-75" });
        e.set(64, { key: 64, name: "mo-64" });
        e.set(23, { key: 23, name: "dan-23" });

        let r = a._toMap(x => x.key, x => ({ key: x.key, name: `${x.name}-${x.key}` }));

        expect(r).toEqual(e);
    });

    it("_unique()", () => {
        let a = [2, 0, 1, 1, 2, 0];

        let r = a._unique();

        expect(r).toEqual([2, 0, 1]);
        expect(r).not.toBe(a);
    });
});