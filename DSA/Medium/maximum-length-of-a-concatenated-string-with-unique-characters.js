var maxLength = function(arr) {
      function hasUniqueCharacters(str) {
        const charSet = new Set();
        for (const char of str) {
            if (charSet.has(char)) {
                return false;
            }
            charSet.add(char);
        }
        return true;
    }

    function backtrack(index, currentStr) {
        if (index === arr.length) {
            return currentStr.length;
        }

        const lengthWithoutCurrent = backtrack(index + 1, currentStr);

        if (hasUniqueCharacters(currentStr + arr[index])) {
            const lengthWithCurrent = backtrack(index + 1, currentStr + arr[index]);
            return Math.max(lengthWithoutCurrent, lengthWithCurrent);
        }

        return lengthWithoutCurrent;
    }

    return backtrack(0, '');
};
