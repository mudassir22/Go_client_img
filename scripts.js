function sendData() {
    const data = document.getElementById('dataToSend').value;

    fetch('https://192.168.0.103:8443', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain', // Set the content type to text/plain
        },
        body: data,
        // Note: You don't need to disable certificate validation in the browser
    })
    .then(response => response.text())
    .then(result => {
        console.log('Server response:', result);
        alert('Server response: ' + result);
    })
    .catch(error => {
        console.error('Error sending data:', error);
        alert('Error sending data: ' + error);
    });
}
