function minimumNumber(n, password) {

    const numbers = "0123456789".split("")
    const lower_case = "abcdefghijklmnopqrstuvwxyz".split("")
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    const special_characters = "!@#$%^&*()-+".split("")

    let checkNum = false;
    let checkLower = false;
    let checkUpper = false;
    let checkSpecial = false;

    const arrPass = password.split("")
    let count = 0;

    lower_case.map((val) => arrPass.includes(val) ? checkLower = true : val)
    upper_case.map((val) => arrPass.includes(val) ? checkUpper = true : val)
    special_characters.map((val) => arrPass.includes(val) ? checkSpecial = true : val)
    numbers.map((val) => arrPass.includes(val) ? checkNum = true : val)



    if (!checkLower) {
        count++
    }

    if (!checkUpper) {
        count++
    }

    if (!checkSpecial) {
        count++
    }

    if (!checkNum) {
        count++
    }

    if (arrPass.length + count < 6) {
        const len = 6 - (arrPass.length + count)
        return count + len;
    }

    return count;
}