
export function generateRandomStrings(totalWords) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const words = []
    let word = '';

    for (let i = 0; i < totalWords; i++) {
        let randomIndex = Math.floor(Math.random() * 10) + 1;
        for (let j = 0; j < randomIndex; j++) {
            word += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        words.push(word)
        word = ''
    }
    console.log("__in generateRandomStrings", words)
    return words.join(' ')
}