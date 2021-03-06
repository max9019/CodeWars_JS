/*
https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
 */

function domainName(url){
    url = url.split('www').join('').split('http://').join('').split('https://').join('').split('.');
    return url[0].length === 0 ? url[1] : url[0];
}