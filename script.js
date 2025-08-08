(async () => {
    const token = "ВАШ_ТОКЕН_БОТА";
    const chat_id = "ВАШ_CHAT_ID";
    const ipData = await fetch("https://api64.ipify.org?format=json").then(res => res.json());
    const userAgent = navigator.userAgent;
    const message = `🌐 Новое посещение!\nIP: ${ipData.ip}\nUA: ${userAgent}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message
        })
    });
})();