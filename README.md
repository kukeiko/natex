Pollutes native prototypes, but every function is prefixed with an underscore to prevent collision with upcoming std functions.
[lodash](https://github.com/lodash/lodash) functions are used where applicable.

# Array

## _flatten()
[lodash.flatten()](https://lodash.com/docs/4.15.0#flatten)

## _unique / _uniq
[lodash](https://lodash.com/docs/4.15.0#uniq)
if (!Array.prototype._unique) {
    Array.prototype._unique = function () {
        var unique = [];
        for (var i = 0; i < this.length; i++) {
            if (unique.indexOf(this[i]) == -1) {
                unique.push(this[i]);
            }
        }
        return unique;
    };
}

if (!Array.prototype._minus) {
    Array.prototype._minus = function (other) {
        if (_ == null) return this.slice();
        return _.difference(this, other);
    };
}

if (!Array.prototype._intersect) {
    Array.prototype._intersect = function (other) {
        if (_ == null) return this.slice();
        return _.intersection(this, other);
    };
}


# Map