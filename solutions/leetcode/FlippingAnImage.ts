function flipAndInvertImage(image: number[][]): number[][] {
  for (let i = 0; i < image.length; i++) {
    image[i].reverse();
    for (let j = 0; j < image[i].length; j++) {
      // image[i][j] = image[i][j] === 0 ? 1 : 0;
      image[i][j] ^= 1;
    }
  }

  return image;
}

// !Explanation
// The function flipAndInvertImage takes a 2D array (matrix) called image as input and performs two operations on each row of the matrix: it flips the row horizontally and then inverts the binary values (0s become 1s and 1s become 0s).
// Here's a step-by-step explanation of how the function works:
// 1. It iterates through each row of the image using a for loop. The loop variable i goes from 0 to image.length - 1.
// 2. Inside the loop, it first reverses the current row (image[i]) using the reverse() method. This flips the row horizontally.
// 3. After reversing the row, it iterates through each element of the current row using another for loop. The loop variable j goes from 0 to image[i].length - 1.
// 4. Inside this inner loop, it inverts the value of each element in the row. This is done using the
//    bitwise XOR operation (image[i][j] ^= 1), which flips the value: if it's 0, it becomes 1, and if it's 1, it becomes 0.
// 5. After processing all rows, the function returns the modified image.
// The function modifies the input image in place and also returns it for convenience.

// !Complexity Analysis
// - Time Complexity: O(m * n), where m is the number of rows and n is the number of columns in the input matrix image. The function processes each element of the matrix exactly once.
// - Space Complexity: O(1). The function uses a constant amount of extra space regardless of the size of the input matrix. The modifications are done in place.

// !Example Usage
// const image = [[1,1,0],[1,0,1],[0,0,0]];
// const result = flipAndInvertImage(image);
// console.log(result); // Output: [[1,0,0],[0,1,0],[1,1,1]]
