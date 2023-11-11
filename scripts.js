function sendData() {
    const data = document.getElementById('dataToSend').value;

    fetch('http://192.168.0.103:8080', {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'text/plain',
        },
    })
    .then(response => response.text())
    .then(result => {
        console.log('Server response:', result);
        alert('Server response:', result);
    })
    .catch(error => {
        console.error('Error sending data:', error);
        alert('Server response:', result);
    });
}
