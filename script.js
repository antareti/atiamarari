(async () => {
    const ipData = await fetch("https://api64.ipify.org?format=json").then(res => res.json());
    const userAgent = navigator.userAgent;
    
    // Запрос теперь отправляется на ваш прокси-сервер на Vercel
    fetch("https://atiamarari.vercel.app/track", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ip: ipData.ip,
            userAgent: userAgent
        })
    });
})();
