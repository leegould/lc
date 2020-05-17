export function permute(nums: number[], n: number = 0): any[] {
    if (n >= nums.length) return [[]];
   const res = [];
   const prevs = permute(nums, n + 1);
   for (let prev of prevs) {
       for (let i = 0; i <= prev.length; i++) {
           let p = prev.slice(0);
           p.splice(i, 0, nums[n]);
           res.push(p);
       }
   }
   return res;
};
