function sendData() {
    const data = document.getElementById('dataToSend').value;

    fetch('https://192.168.0.103:443', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      // Disable certificate validation (not recommended for production)
      agent: new (require('https')).Agent({ rejectUnauthorized: false }),
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
