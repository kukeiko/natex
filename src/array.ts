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
         * Returns a new array with items found in the other maps are removed.
         */
        _minus(...others: T[][]): Array<T>;
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

if (!Array.prototype._unique) {
    Array.prototype._unique = function () {
        return _.uniq(this);
    };
}
