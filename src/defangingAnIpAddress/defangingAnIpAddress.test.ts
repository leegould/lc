import { expect } from 'chai';
import { defangIPaddr } from './defangingAnIpAddress';

describe('Defanging an IP Address', () => {
    it('runs as expected', () => {
        const input = "1.1.1.1";
        const result = defangIPaddr(input);
        const expected = "1[.]1[.]1[.]1";
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = "255.100.50.0";
        const result = defangIPaddr(input);
        const expected = "255[.]100[.]50[.]0";
        expect(result).to.equal(expected);
    });
});
