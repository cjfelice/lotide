# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cjfelice/lotide`

**Require it:**

`const _ = require('@cjfelice/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(firstArr, secondArr)`: confirms if arrays are equal.
* `assertObjectsEqual(firstObj, secondObj)`: confirms if objects are equal.
* `countLetters(string)`: outputs an object containing letter counts for each letter in a string.
* `countOnly(array, value)`: counts how many of a given value exist in an array.
* `eqArrays(firstArr, secondArr)`: checks if two arrays are equal.
* `eqObjects(firstObj, secondObj)`: checks if two objects are equal.
* `findKey(object, callback)`: finds and outputs given key if it exists in given object.
* `findKeyByValues(object, value)`: outputs the key of a value if it exists in an object.
* `flatten(array)`: un-nests an array and outputs a single basic array of all elements.
* `head(array)`: returns the first element in an array.
* `letterPositions(string)`: returns an object containing details on each letter in a string and its string locations.
* `map(array, callback)`: takes in an array and returns a new array with each element modified by an input callback.
* `middle(array)`: returns a new array comprised of the middle one or two elements of input.
* `tail(array)`: returns a new array without the first element of the original.
* `takeUntil(array, callback)`: returns a new array with the same elements of original up until a chosen callback is true.
* `without(array, value)`: returns a new array with all instances of a chosen value removed.