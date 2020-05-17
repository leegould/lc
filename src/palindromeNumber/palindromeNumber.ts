export function isPalindrome(num: number) {
    if (num < 0) {
        return false;
    }

    const strNum = num.toString();

    for(let i = 0; i < Math.floor(strNum.length / 2);i++) {
        if (strNum[i] !== strNum[strNum.length - 1 - i]) {
            return false;
        }
    }

    return true;
}