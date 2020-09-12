/**
 * Defanging an IP Address
 * @param address the ip address
 * @returns the address defanged
 * @description runtime O(?) space O(1)
 */
export function defangIPaddr(address: string): string {
    return address.replace(/\./g, '[.]');
};
