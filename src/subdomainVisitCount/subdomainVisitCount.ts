/**
 * how many visits to various subdomains
 * @param cpdomains the list of visits
 * @returns a list of subdomains with visit counts 
 * @description runtime O()
 */
export function subdomainVisits(cpdomains: string[]) {
    const counts = {};

    for(let i = 0; i < cpdomains.length; i++) {
        const [visits, domain] = cpdomains[i].split(' ');
        const subDomains = domain.split('.');
        for (let j = 0; j < subDomains.length; j++) {
            const subDomain = subDomains.slice(j).join('.');
            counts.hasOwnProperty(subDomain)
                ? counts[subDomain] += Number(visits)
                : counts[subDomain] = Number(visits) ;
        }
    }
    
    return Object.keys(counts).map(key => `${counts[key]} ${key}`);
}