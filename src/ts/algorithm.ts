function longestOnes(nums: number[], k: number): number {
  let left = 0;
  let right = 0;
  let zeroCount = 0;
  let maxLength = 0;

  while(right < nums.length){
    if(nums[right] === 0){
      zeroCount++
    }

    while(zeroCount > k){
      if(nums[left] === 0){
        zeroCount--
      }
      left++
    }

    length = right - left + 1
    maxLength = Math.max(maxLength , length)

  }    

  return maxLength;
};