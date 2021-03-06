Adds useful functions to native collections by polluting their prototypes.
Each function is prefixed with an underscore to prevent possible future name collision and follows signature styles similar to native functions such as Array.filter() & Array.map().

Includes TypeScript definitions and sourcemaps.

[lodash](https://github.com/lodash/lodash) functions are used where applicable.

# Array&lt;T&gt;
## _flatten(): T
Flatten the array 1 level.

[lodash.flatten()](https://lodash.com/docs/4.16.2#flatten)

## _intersect(...others: T[][]): Array&lt;T&gt;
Returns a new array containing values found in all arrays.

[lodash.intersection()](https://lodash.com/docs/4.16.2#intersection)

## _minus(...others: T[][]): Array&lt;T&gt;
Returns a new array with items found in the other maps removed.

[lodash.difference()](https://lodash.com/docs/4.16.2#difference)

## _toMap&lt;K&gt;(key: (value: T) =&gt; K): Map&lt;K, T&gt;;
Transforms this array into a map.

## _toMap&lt;K, V&gt;(key: (value: T) =&gt; K, value: (value: T) =&gt; V): Map&lt;K, V&gt;;        
Transforms this array into a map.

## _unique(): Array&lt;T&gt;
Returns a new array with only the first occurence of each unique value being kept.

[lodash.uniq()](https://lodash.com/docs/4.16.2#uniq)


# Map&lt;K, V&gt;
Functions handling more than one map will only consider the key for equality checks, and only first occurrences of a common (= equal key) item will be kept.

## _copy(): Map&lt;K, V&gt;

Returns a shallow copy of the map.

## _filter(predicate: (value: V, index: K, map: Map&lt;K, V&gt;) =&gt; boolean): Map&lt;K, V&gt;

Returns a new map containing the items filtered by the predicate.

## _intersect(...others: Map&lt;K, V&gt;[]): Map&lt;K, V&gt;

Returns a new map containing items found in all maps.

## _map&lt;M&gt;(handler: (value: V, index: K, map: Map&lt;K, V&gt;) =&gt; M): Map&lt;K, M&gt;

Returns a new map where each value is mapped against the handler.

## _merge(...others: Map&lt;K, V&gt;[]): Map&lt;K, V&gt;

Returns a new map containing the values of all maps.

## _minus(...others: Map&lt;K, V&gt;[]): Map&lt;K, V&gt;

Returns a new map with items found in the other maps removed.

## _toArray(): V[]

Returns the values of the map as an array.