(async () => {
    const token = "8354851986:AAFSylXPm6__ZOkU6trvWpORN9s-NGL5wow";
    const chat_id = "1473585452";
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
