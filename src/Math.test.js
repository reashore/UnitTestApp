
import Chai from 'chai';
import Math from './Math';


describe('Math test suite', () => {
    let expect = Chai.expect;

    it('Add test', () => {
        let result = Math.add(10, 2);
        expect(result).to.equal(12);
    });

    it('sub test', () => {
        let result = Math.sub(10, 2);
        expect(result).to.equal(8);
    });

    it('mul test', () => {
        let result = Math.mul(10, 2);
        expect(result).to.equal(20);
    });

    it('div test', () => {
        let result = Math.div(10, 2);
        expect(result).to.equal(5);
    });
});

