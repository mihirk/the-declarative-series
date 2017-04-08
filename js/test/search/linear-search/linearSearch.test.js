const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;
const linearSearch = require('../../../src/search/linear-search/linearSearch');

describe('Linear Search Test', () => {
    it('Returns -1 if element not found', () => {
        let result = linearSearch([1,2,3], 19);
        expect(result).to.equal(-1);
    });

    it('Returns -1 if empty collection', () => {
        let result = linearSearch([], 1);
        expect(result).to.equal(-1);
    });

    it('Returns element index if element found', () => {
        let result = linearSearch([1,2,3], 1);
        expect(result).to.equal(0);
        result = linearSearch([1,2,3], 2);
        expect(result).to.equal(1);
        result = linearSearch([1,2,3], 3);
        expect(result).to.equal(2);
    });
});
