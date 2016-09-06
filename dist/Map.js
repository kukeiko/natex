if (!Map.prototype._copy) {
    Map.prototype._copy = function () {
        var _this = this;
        var map = new Map();
        _this.forEach(function (v, i) { return map.set(i, v); });
        return map;
    };
}
if (!Map.prototype._filter) {
    Map.prototype._filter = function (predicate) {
        var _this = this;
        var map = new Map();
        _this.forEach(function (v, k) { return predicate(v) ? map.set(k, v) : null; });
        return map;
    };
}
if (!Map.prototype._map) {
    Map.prototype._map = function (callback) {
        var _this = this;
        var map = new Map();
        _this.forEach(function (v, k) { return map.set(k, callback(v)); });
        return map;
    };
}
if (!Map.prototype._toArray) {
    Map.prototype._toArray = function () {
        var a = [];
        this.forEach(function (v) { return a.push(v); });
        return a;
    };
}
