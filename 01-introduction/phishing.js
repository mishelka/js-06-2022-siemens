function getMessage() {
    const amount = Math.round(Math.random() * 100000);
    const message = `
        You won amount \u20AC!
        To collect you winnings, send your credit card
        and bank details to michaela.bacikova@tuke.sk
        `;
    return message;
}

function showWinningsAlert() {
    showWinningsInDocument();
    alert(getMessage());
}

function showWinningsInDocument() {
    document.write("<h1>" + getMessage() + "</h1>");
}