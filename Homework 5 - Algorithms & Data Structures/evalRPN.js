var evalRPN = function (tokens) {
    let a = []
    for (let i = 0; i < tokens.length; i++) {
        switch (tokens[i]) {
            case '*':
                a.push(Number(a.pop()) * Number(a.pop()));
                break;
            case '+':
                a.push(Number(a.pop()) + Number(a.pop()));
                break;
            case '-':
                a1 = Number(a[a.length - 2]) - Number(a[a.length - 1])
                a.pop();
                a.pop();
                a.push(a1);
                break;
            case '/':
                let a2 = Number(a[a.length - 2]) / Number(a[a.length - 1])
                a.pop();
                a.pop();
                console.log(a2)
                if (a2 >= 0) {
                    a.push(Math.floor(a2));
                } else { a.push(Math.ceil(a2)); }

                break;
            default:
                a.push(tokens[i])
                break;
        }

    }
    return a[0]
};