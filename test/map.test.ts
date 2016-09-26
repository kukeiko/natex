import "../src/map";

describe("map", () => {
    it("_copy", () => {
        let a = new Map<number, string>();
        a.set(0, "a");
        a.set(1, "b");

        let r = a._copy();

        expect(r.get(0)).toEqual("a");
        expect(r.get(1)).toEqual("b");
        expect(r.size).toEqual(a.size);
        expect(r).not.toBe(a);
    });

    it("_filter", () => {
        let a = new Map<string, number>();
        a.set("khaz", 0);
        a.set("mo", 1);
        a.set("dan", 2);

        let r = a._filter((v, i, m) => {
            expect(v).toEqual(jasmine.any(Number));
            expect(i).toEqual(jasmine.any(String));
            expect(m).toEqual(jasmine.any(Map));

            return v == 1;
        });

        expect(r.get("mo")).toEqual(1);
        expect(r.size).toEqual(1);
        expect(r).not.toBe(a);
    });

    it("_map", () => {
        let a = new Map<number, { id: string }>();
        a.set(0, { id: "khaz" });
        a.set(1, { id: "mo" });
        a.set(2, { id: "dan" });

        let r = a._map((v, i, m) => {
            expect(v).toEqual(jasmine.any(Object));
            expect(i).toEqual(jasmine.any(Number));
            expect(m).toEqual(jasmine.any(Map));

            return v.id;
        });

        expect(r.get(0)).toEqual("khaz");
        expect(r.get(1)).toEqual("mo");
        expect(r.get(2)).toEqual("dan");
        expect(r.size).toEqual(3);
        expect(r).not.toBe(a);
    });

    it("_toArray", () => {
        let a = new Map<number, string>();
        a.set(0, "khaz");
        a.set(1, "mo");
        a.set(2, "dan");

        let r = a._toArray();

        expect(r.length).toEqual(3);
        expect(r.includes("khaz")).toBe(true);
        expect(r.includes("mo")).toBe(true);
        expect(r.includes("dan")).toBe(true);
    });
});