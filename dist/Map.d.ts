interface Map<K, V> {
    _copy(): Map<K, V>;
    _filter(predicate: (value: V) => boolean): Map<K, V>;
    _map<M>(callback: (value: V) => M): Map<K, M>;
    _toArray(): V[];
}
