document.getElementById('contactForm').addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = {
        name: e.target.name.value,
        phone: e.target.phone.value,
        subject: e.target.subject.value,
        message: e.target.message.value
    };

    try {
        await fetch(
            'https://script.google.com/macros/s/AKfycbwzErxctGb5b0wK43lpkF5saJUM-ig4HdXldDv2nd2MiorD-UolSkILujud9MfifksZFg/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8'
                },
                body: JSON.stringify(data)
            }
        );

        alert('Спасибо! Заявка отправлена.');
        e.target.reset();

    } catch (err) {
        alert('Ошибка отправки.');
        console.error(err);
    }
});