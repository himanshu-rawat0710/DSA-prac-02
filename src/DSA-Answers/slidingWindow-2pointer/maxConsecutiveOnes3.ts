function longestOnes(nums: number[], k: number): number {
    // Initialize left and right pointers for the sliding window
    let left = 0;
    let right = 0;
    let zeroCount = 0;
    let maxLength = 0;
  
    // Iterate through the array using the right pointer
    while (right < nums.length) {
      // If the current number is zero, increment the zeroCount
      if (nums[right] === 0) {
        zeroCount++;
      }
  
      // If the number of zeros exceeds k, we need to shrink the window
      while (zeroCount > k) {
        // If the leftmost number in the window is zero, decrement the zeroCount
        if (nums[left] === 0) {
          zeroCount--;
        }
        // Move the left pointer to the right to shrink the window
        left++;
      }
  
      // Calculate the length of the current valid window
      const length = right - left + 1;
  
      // Update maxLength if the current window is larger
      maxLength = Math.max(maxLength, length);
  
      // Move the right pointer to expand the window
      right++;
    }
  
    // Return the maximum length of the subarray found
    return maxLength;
  }
  