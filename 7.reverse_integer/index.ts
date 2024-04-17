var reverse = function(x) {
    let rev = 0;

    while (x !== 0) {
        const digit = x % 10;
        rev = rev * 10 + digit;
        x = Math.trunc(x / 10);
    }

    if (rev > Math.pow(2, 31) - 1 || rev < -Math.pow(2, 31)) {
        return 0;
    }

    return rev;
};
