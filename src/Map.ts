interface Map<K, V> {
    /**
     * Returns a shallow copy of the map.
     */
    _copy(): Map<K, V>;
    /**
     * Returns a new map containing the items filtered by the predicate.
     */
    _filter(predicate: (value: V, index: K, map: Map<K, V>) => boolean): Map<K, V>;
    /**
     * Returns a new map containing items found in all maps.
     * Only the keys are checked for equality, and only the first occurance of a common item is taken.
     */
    _intersect(...others: Map<K, V>[]): Map<K, V>;
    /**
     * Returns a new map where each value is mapped against the handler.
     */
    _map<M>(handler: (value: V, index: K, map: Map<K, V>) => M): Map<K, M>;
    /**
     * Returns the values of the map as an array.
     */
    _toArray(): V[];
}

if (!Map.prototype._copy) {
    Map.prototype._copy = function () {
        let map = new Map<any, any>();
        this.forEach((v, i) => map.set(i, v));
        return map;
    }
}

if (!Map.prototype._filter) {
    Map.prototype._filter = function (predicate: (value: any, index: any, map: any) => boolean) {
        let map = new Map<any, any>();
        this.forEach((v, k, m) => predicate(v, k, m) ? map.set(k, v) : null);
        return map;
    }
}

if (!Map.prototype._intersect) {
    Map.prototype._intersect = function (...others: Map<any, any>[]) {
        let maps = [this as Map<any, any>, ...others];
        let common = new Map<any, any>();

        maps.forEach((map, mapIndex) => {
            let withoutMe = maps.filter((_, i) => i != mapIndex);

            map.forEach((v, k) => {
                if (!common.has(k) && withoutMe.every(m => m.has(k))) {
                    common.set(k, v);
                }
            });
        });

        return common;
    }
}

if (!Map.prototype._map) {
    Map.prototype._map = function (handler: (value: any, index: any, map: any) => any) {
        let map = new Map<any, any>();
        this.forEach((v, k) => map.set(k, handler(v, k, this)));
        return map;
    }
}

if (!Map.prototype._toArray) {
    Map.prototype._toArray = function () {
        let a = [];

        (this as Map<any, any>).forEach(v => a.push(v));

        return a;
    }
}