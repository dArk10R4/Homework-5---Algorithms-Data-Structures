var mySqrt = function (x) {
    x = x.toString();
    if (x == 0) { return 0 }
    let ans = "0";
    let b;
    var q;
    var a;
    if (x.length % 2 == 1) {
        q = x.slice(0, 1);
        a = -1;
    } else { q = x.slice(0, 2); a = 0; }
    for (let i = 1; i <= Math.ceil(x.length / 2); i++) {
        for (let j = 0; j < 10; j++) {
            if ((parseInt(((parseInt(ans) * 2).toString() + j.toString())) * j <= parseInt(q)) && (parseInt(((parseInt(ans) * 2).toString() + (j + 1).toString())) * (j + 1) > parseInt(q))) {
                q = (parseInt(q) - parseInt(((parseInt(ans) * 2).toString() + j.toString())) * j).toString() + x.substr((a + 2 * i), 2);
                ans = ans + j.toString();
                break;
            }
        }
    }
    return parseInt(ans.slice(1));
};