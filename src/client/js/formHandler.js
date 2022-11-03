function formHandler(url) {
    fetch('/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
    })
        .then((res) => {
            let data = res.json();
            return data;
        })
        .then((data) => {
            results.classList.remove('hide');
            subjectivity.innerText = data.subjectivity;
            confidence.innerText = data.confidence;
            irony.innerText = data.irony;
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    formHandler,
};
