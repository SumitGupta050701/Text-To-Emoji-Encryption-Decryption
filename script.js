const emojiMap = {
    'a': '😀', 'b': '😁', 'c': '😂', 'd': '😃', 'e': '😄', 
    'f': '😅', 'g': '😆', 'h': '😉', 'i': '😊', 'j': '😋', 
    'k': '😎', 'l': '😍', 'm': '😘', 'n': '😗', 'o': '😙', 
    'p': '😚', 'q': '😇', 'r': '😐', 's': '😑', 't': '😶', 
    'u': '😏', 'v': '😣', 'w': '😥', 'x': '😮', 'y': '🤐', 
    'z': '😯', ' ': ' ', '.': '🌟', ',': '✨'
};
const reverseEmojiMap = Object.fromEntries(Object.entries(emojiMap).map(([k, v]) => [v, k]));

function encryptText() {
    const plaintext = document.getElementById('plaintext').value.toLowerCase();
    let emojiText = '';
    for (let char of plaintext) {
        emojiText += emojiMap[char] || char;
    }
    document.getElementById('emojiText').value = emojiText;
}

function decryptText() {
    const emojiText = document.getElementById('emojiText').value;
    let plaintext = '';
    for (let char of emojiText) {
        plaintext += reverseEmojiMap[char] || char;
    }
    document.getElementById('plaintext').value = plaintext;
}
