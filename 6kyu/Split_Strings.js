/*

https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']

 */

function solution(str){
    let string = '';
    let arr = [];
    for (let i = 0; i < str.length - 1; i += 2) {
        string = str[i] + str[i+1],
            arr.push(string);
    }
    if (str.length % 2 !== 0) {
        arr.push(`${str[str.length - 1]}_`)
    } return arr;
}