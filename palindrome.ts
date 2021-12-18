function PalindromeTs(string) {
    const palindrome = string.split("").reverse().join("");
    if (palindrome == string) console.log("string bernilai palindrome");
    else console.log("string tidak bernilai palindrome");
}

PalindromeTs("asa")