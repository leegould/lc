/**
 * Unique Email addresses
 * @param emails list of email addresses
 * @returns the number of unique emails
 * @description runtime O()
 */
export function numUniqueEmails(emails: string[]) {
    const uniques = new Set();

    for(let i = 0; i < emails.length;i++) {
        const [pre, post] = emails[i].split('@');
        const nodots = pre.replace(/\./g, '');
        const cleaned = `${nodots.substring(0, nodots.indexOf('+') > -1 ? nodots.indexOf('+') : undefined)}@${post}`;
        uniques.add(cleaned);
    }

    return uniques.size;
}