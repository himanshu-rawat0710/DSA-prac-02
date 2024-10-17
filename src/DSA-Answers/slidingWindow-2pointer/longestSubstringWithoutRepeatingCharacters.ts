function lengthOfLongestSubstring(s: string): number {
    let left = 0;
    let maxLength = 0;
    const obj1: { [key: string]: number } = {};
  
    for (let right = 0; right < s.length; right++) {
      if (obj1.hasOwnProperty(s[right])) {
        // left = obj1[s[right]] + 1 -- wrong 


        // Update left pointer to the right of the last occurrence of s[right]
        left = Math.max(left, obj1[s[right]] + 1);
      }
  
      // Update the last seen index of the character
      obj1[s[right]] = right;
  
      // Calculate the length of the current substring
      const length = right - left + 1;
      maxLength = Math.max(maxLength, length);
    }
  
    return maxLength;
  }
  