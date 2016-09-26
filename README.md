Pollutes native prototypes, but every function is prefixed with an underscore to prevent collision with upcoming std functions.
[lodash](https://github.com/lodash/lodash) functions are used where applicable.

# Array&lt;T&gt;
## _flatten(): T
Flatten the array 1 level.

[lodash.flatten()](https://lodash.com/docs/4.16.2#flatten)

## _intersect(...others: T[][]): Array&lt;T&gt;
Returns a new array containing values found in all arrays.

[lodash.intersection()](https://lodash.com/docs/4.16.2#intersection)

## _minus(...others: T[][]): Array&lt;T&gt;
Returns a new array with unique values, where only the first occurence is kept.

[lodash.difference()](https://lodash.com/docs/4.16.2#difference)

## _unique(): Array&lt;T&gt;
Returns a new array with only the first occurence of each unique value being kept.

[lodash.uniq()](https://lodash.com/docs/4.16.2#uniq)


# Map&lt;K, V&gt;
## _copy(): Map&lt;K, V&gt;

Returns a shallow copy of the map.

## _filter(predicate: (value: V, index: K, map: Map&lt;K, V&gt;) =&gt; boolean): Map&lt;K, V&gt;

Returns a new map containing the items filtered by the predicate.

## _map&lt;M&gt;(handler: (value: V, index: K, map: Map&lt;K, V&gt;) =&gt; M): Map&lt;K, M&gt;

Returns a new map where each value is mapped against the handler.

## _toArray(): V[]

Returns the values of the map as an array.