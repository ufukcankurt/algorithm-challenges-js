function removeElement(nums: number[], val: number): number {
    let i = 0;

    for(let z = 0 ; z < nums.length; z++ ){
        if(nums[z] !== val){
            nums[i] = nums[z];
            i++;
        }
    }
    
    return i;
};