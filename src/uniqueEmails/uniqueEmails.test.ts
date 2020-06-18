import { expect } from 'chai';
import { numUniqueEmails } from './uniqueEmails';

describe('Unique Emails', () => {
    it('runs as expected', () => {
        const input = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
        const result = numUniqueEmails(input);
        expect(result).to.equal(2);
    });
    it('runs as expected with simple example', () => {
        const input = ["test@leetcode.com"];
        const result = numUniqueEmails(input);
        expect(result).to.equal(1);
    });
});
