function maxScore(cardPoints: number[], k: number): number {
    const n = cardPoints.length;
    let maxSum = 0;
  
    // Calculate the initial sum of the first k cards
    for (let i = 0; i < k; i++) {
      maxSum += cardPoints[i];
    }
  
    let currentSum = maxSum;
  
    // Now, slide the window from the end of the array, iterating from k-1 to 0
    for (let i = k - 1; i >= 0; i--) {
      // Remove the card from the start of the initial selection
      currentSum -= cardPoints[i];
      // Add the corresponding card from the end of the array
      currentSum += cardPoints[n - (k - i)];
  
      // Update maxSum if the current sum is greater
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  