var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        if (isBadVersion(1)) { return 1 }
        let left = 1;
        let right = n;

        while (left < right) {
            let m = Math.floor((right + left) / 2);
            if (isBadVersion(m)) {
                right = m
            }
            else { left = m }
            if (left == right - 1) { return right }

        }

    };

};