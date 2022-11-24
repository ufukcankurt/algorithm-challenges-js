function caesarCipher(s, k) {
    // Write your code here

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const pass = s.split("");

    let newPass = "";
    let index

    for (let i = 0; i < pass.length; i++) {

        const isCapital = !/[a-z]/.test(pass[i]) && /[A-Z]/.test(pass[i]);

        if (isCapital) {
            index = alphabet.indexOf(pass[i].toLowerCase())
        } else {
            index = alphabet.indexOf(pass[i])
        }

        if (index !== -1) {
            index += k
            index = index % 26
        }

        if (index === -1) {
            newPass = newPass + pass[i]
        }
        else {
            if (isCapital) {
                newPass = newPass + alphabet[index].toUpperCase()
            } else {
                newPass = newPass + alphabet[index]
            }
        }
    }

    return newPass
}