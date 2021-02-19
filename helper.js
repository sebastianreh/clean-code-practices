function areEqualArrays(arr1, arr2) {
    return arr2.every(item => arr1.includes(item));
}

module.exports = { areEqualArrays }