import * as _ from "lodash";

declare global {
    interface Array<T> {
        /**
         * Flatten the array 1 level.
         */
        _flatten(): T;
        /**
         * Returns a new array containing values found in all arrays.
         */
        _intersect(...others: T[][]): Array<T>;
        /**
         * Returns a new array with items found in the other maps removed.
         */
        _minus(...others: T[][]): Array<T>;
        /**
         * Transforms this array into a map.
         */
        _toMap<K>(key: (value: T) => K): Map<K, T>;
        /**
         * Transforms this array into a map.
         */
        _toMap<K, V>(key: (value: T) => K, value: (value: T) => V): Map<K, V>;
        /**
         * Returns a new array with unique values, where only the first occurence is kept.
         */
        _unique(): Array<T>;
    }
}

if (!Array.prototype._flatten) {
    Array.prototype._flatten = function () {
        return _.flatten(this);
    }
}

if (!Array.prototype._minus) {
    Array.prototype._minus = function (...others: any[][]) {
        return _.difference(this, ...others);
    };
}

if (!Array.prototype._intersect) {
    Array.prototype._intersect = function (...others: any[][]) {
        return _.intersection(this, ...others);
    };
}

if (!Array.prototype._toMap) {
    Array.prototype._toMap = function (keyGetter: (v: any) => any, valueGetter?: (v: any) => any) {
        let map = new Map();
        if (valueGetter == null) {
            (this as any[]).forEach(v => map.set(keyGetter(v), v));
        } else {
            (this as any[]).forEach(v => map.set(keyGetter(v), valueGetter(v)));
        }
        return map;
    };
}

if (!Array.prototype._unique) {
    Array.prototype._unique = function () {
        return _.uniq(this);
    };
}
