var guessNumber = function (n) {
    let left = 1;
    let right = n;
    while (right >= left) {
        let m = Math.floor((left + right) / 2)
        if (guess(m) == 0) { return m }
        if (guess(m) > 0) { left = m + 1 }
        if (guess(m) < 0) { right = m - 1 }
    }
};