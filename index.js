function myEach(collection, callback) {
      for (let key in collection) {
          callback(collection[key]);
        }
    return collection;
}

function myMap(collection, callback) {
    const result = [];
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(callback(collection[key]));
      }
    }
    return result;
  }

  function myReduce(collection, callback, accumulator) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        accumulator = accumulator !== undefined 
          ? callback(accumulator, collection[key]) 
          : collection[key];
      }
    }
    return accumulator;
  }

  function myFind(collection, callback) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i], i, collection)) {
        return collection[i];
      }
    }
    return undefined;
  }

  function myFilter(collection, callback) {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i], i, collection)) result.push(collection[i]);
    }
    return result;
  }

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }

  function myFirst(collection, n) {
    if (n === undefined) {
      return collection[0]; 
    }
    return collection.slice(0, n);
  }

  function myLast(collection, n) {
    if (n === undefined) {
      return collection[collection.length - 1];
    }
    return collection.slice(-n);
  }

const myKeys = Object.keys;

const myValues = Object.values;
