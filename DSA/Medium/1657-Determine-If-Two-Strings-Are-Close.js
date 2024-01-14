/* Question Link: https://leetcode.com/problems/determine-if-two-strings-are-close/ */

var closeStrings = function(word1, word2) {
    
    let word1Map = new Map();
    let word2Map = new Map();

    for(let i = 0 ; i < word1.length ; i++)
    {
        if(word1Map.has(word1[i]))
        {
            word1Map.set(word1[i], word1Map.get(word1[i]) + 1);
        }else
        {
            word1Map.set(word1[i], 1);
        }
    }

    for(let i = 0 ; i < word2.length ; i++)
    {
        if(word2Map.has(word2[i]))
        {
            word2Map.set(word2[i], word2Map.get(word2[i]) + 1);
        }else
        {
            word2Map.set(word2[i], 1);
        }
    }

    for (let key of word1Map.keys()) {
        if (!word2Map.has(key)) {
            return false;
        }
    }

    const freqValues1 = [...word1Map.values()].sort();
    const freqValues2 = [...word2Map.values()].sort();

    return freqValues1.join(',') === freqValues2.join(',');
};
