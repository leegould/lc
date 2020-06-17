import { expect } from 'chai';
import { subdomainVisits } from './subdomainVisitCount';

describe('Subdomain Visit Count', () => {
    it('runs as expected', () => {
        const input = ["9001 discuss.leetcode.com"];
        const expected = ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"];
        const result = subdomainVisits(input);
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with multiple counts on subdomain', () => {
        const input = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
        const expected = ['900 google.mail.com','901 mail.com','951 com','50 yahoo.com','1 intel.mail.com','5 wiki.org','5 org'];
        const result = subdomainVisits(input);
        expect(result).to.deep.equal(expected);
    });
});