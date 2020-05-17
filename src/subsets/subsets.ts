export function subsets(nums: number[]) {
    const out = [];

    out.push([]);
    out.push(nums);

    for(let i = 0; i < nums.length;i++) {
        out.push([nums[i]]);
        for(let j = i + 1; j < nums.length;j++) {
            out.push([nums[i], nums[j]]);
        }
        
    }

    return out;
}