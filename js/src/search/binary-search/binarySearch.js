// Utils
const ml = (number) => parseInt(number / 2);

//Matchers
const isLower = (a, b) => a > b;
const isHigher = (a, b) => a < b;
const isEqual = (a, b) => a === b;
const isRepeating = (ignoredArg1, ignoredArg2, curr, prev) => curr === prev;
const isEmpty = (a) => a == undefined;

// Modifiers
const firstHalf = (sortedCollection, elementToFind, matchingIndex, prevMatchingIndex) =>
    binarySearch(sortedCollection, elementToFind, ml(matchingIndex), matchingIndex);
const latterHalf = (sortedCollection, elementToFind, matchingIndex) =>
    binarySearch(sortedCollection, elementToFind, ml(sortedCollection.length + matchingIndex), matchingIndex);
const found = (ignoredArg1, ignoredArg2, matchingIndex) => matchingIndex;
const notFound = () => -1;

// Matcher Modifier Map
const fns = [
    {testFn: isEmpty, modifier: notFound},
    {testFn: isRepeating, modifier: notFound},
    {testFn: isEqual, modifier: found},
    {testFn: isLower, modifier: firstHalf},
    {testFn: isHigher, modifier: latterHalf}
];

const binarySearch = (sortedCollection,
                      elementToFind,
                      matchingIndex = ml(sortedCollection.length),
                      prevMatchingIndex) =>
    fns.find(({testFn}) => testFn(sortedCollection[matchingIndex], elementToFind, matchingIndex, prevMatchingIndex)).modifier(sortedCollection, elementToFind, matchingIndex, prevMatchingIndex);

module.exports = binarySearch;