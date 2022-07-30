var isValid = function (s) {
    if (s.length % 2 === 1) {
        return false
    }
    let stack = []
    for (elem of s) {
        if (elem === '(') {
            stack.push(1)
        }
        if (elem === '[') {
            stack.push(2)
        }
        if (elem === '{') {
            stack.push(3)
        }
        if (elem === ')') {
            if (stack.length === 0) { return false }
            let a = stack.pop()
            if (a !== 1) {
                return false
            }
        }
        if (elem === ']') {
            if (stack.length === 0) { return false }
            let a = stack.pop()
            if (a !== 2) {
                return false
            }
        }
        if (elem === '}') {
            if (stack.length === 0) { return false }
            let a = stack.pop()
            if (a !== 3) {
                return false
            }
        }

    }
    if (stack.length === 0) { return true }
    else { return false }

};