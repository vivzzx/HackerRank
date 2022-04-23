/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    const result = nums.map(num => {
        return num % 2 == 0 ? num * 2 : num * 3
    })
    return result
}

const test = [1, 2, 3, 4, 5]
modifyArray(test)
