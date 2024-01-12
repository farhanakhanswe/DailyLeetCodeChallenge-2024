/* Question Link: https://leetcode.com/problems/determine-if-string-halves-are-alike/ */

var halvesAreAlike = function(s) {
    let countOfA = 0;
    let countOfB = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    for(let i = 0 ; i < Math.floor(s.length/2) ; i++)
    {
        if(vowels.includes(s[i]))
        {
            countOfA++;
        }
    }

    for(let i = Math.floor(s.length/2) ; i < s.length ; i++)
    {
        if(vowels.includes(s[i]))
        {
            countOfB++;
        }
    }

    return countOfA === countOfB;
};
