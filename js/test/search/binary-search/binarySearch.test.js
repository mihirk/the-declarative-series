const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;
const binarySearch = require('../../../src/search/binary-search/binarySearch');

describe('Binary Search Test', () => {
    it('Returns -1 when empty collection', () => {
        let result = binarySearch([], 2);
        expect(result).to.equal(-1);
    });

    it('Returns -1 when not found', () => {
        let result = binarySearch([1], 2);
        expect(result).to.equal(-1);
    });

    it('Returns returns index when element is found and collection has odd number of elements', () => {
        let result = binarySearch([2], 2);
        expect(result).to.equal(0);
    });

    it('Returns returns index when element is found and collection has even number of elements', () => {
        let result = binarySearch([1, 2], 1);
        expect(result).to.equal(0);
        result = binarySearch([1, 2], 2);
        expect(result).to.equal(1);
    });

    it('Returns returns index when element is last', () => {
        let result = binarySearch([1, 2, 3, 4, 5], 5);
        expect(result).to.equal(4);
    });

    it('Returns returns index when element is first', () => {
        let result = binarySearch([1, 2, 3, 4, 5], 1);
        expect(result).to.equal(0);
    });
});
