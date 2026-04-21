function showResult() {
    const messages = [
        "Так  твій мозок легко обдурити!",
        "Не завжди можна довіряти очам ",
        "Ти бачиш не те, що є насправді ",
        "Мозок іноді вигадує реальність "
    ];

    const random = Math.floor(Math.random() * messages.length);
    alert(messages[random]);
}
