function designerPdfViewer(h, word) {

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let max = 0;

    for (let i = 0; i < word.length; i++) {
        let index = alphabet.indexOf(word[i])
        h[index] > max ? max = h[index] : ""
    }
    return max * word.length
}