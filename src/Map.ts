interface Map<K, V> {
    _copy(): Map<K, V>;
    _filter(predicate: (value: V) => boolean): Map<K, V>;
    _map<M>(callback: (value: V) => M): Map<K, M>;
    _toArray(): V[];
}

if (!Map.prototype._copy) {
    Map.prototype._copy = function () {
        let _this = this as Map<any, any>;
        let map = new Map<any, any>();

        _this.forEach((v, i) => map.set(i, v));

        return map;
    }
}

if (!Map.prototype._filter) {
    Map.prototype._filter = function (predicate: (value: any) => boolean) {
        let _this = this as Map<any, any>;
        let map = new Map<any, any>();
        _this.forEach((v, k) => predicate(v) ? map.set(k, v) : null);
        return map;
    }
}

if (!Map.prototype._map) {
    Map.prototype._map = function (callback: (value: any) => any) {
        let _this = this as Map<any, any>;
        let map = new Map<any, any>();
        _this.forEach((v, k) => map.set(k, callback(v)));
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