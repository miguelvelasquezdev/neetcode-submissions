class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    let loM = 0;
    let hiM = matrix.length;
    let loN = 0;
    let hiN = matrix[loM].length;

    do {
      const mM = Math.floor(loM + (hiM - loM) / 2);
      const mN = Math.floor(loN + (hiN - loN) / 2);
      const vN = matrix[mM][mN];

      if (vN === target) {
        return true;
      } else if (vN < target && vN === matrix[mM][matrix[mM].length - 1]) {
        loM = mM + 1;
        loN = 0
        hiN = matrix[0].length;
      } else if (vN > target && vN === matrix[mM][0]) {
        hiM = mM;
        loN = 0
        hiN = matrix[0].length;
      } else if (vN < target) {
        loN = mN + 1;
      } else {
        hiN = mN;
      }
    } while (loM < hiM && loN < hiN);

    return false;
  }
}
