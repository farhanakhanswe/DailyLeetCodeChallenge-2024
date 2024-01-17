/* Question Link: https://leetcode.com/problems/unique-number-of-occurrences/ */

var uniqueOccurrences = function(arr) {
    
    let map = new Map();

    for(let i = 0; i < arr.length ; i++)
    {
        if(map.has(arr[i]))
        {
            count = map.get(arr[i]);
            map.set(arr[i], count + 1);
        }else{
            map.set(arr[i], 1);
        }
    }

    let mapArr = Array.from(map.values());
    let set = new Set(mapArr);

    return set.size === mapArr.length;
}
