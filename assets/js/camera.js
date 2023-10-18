navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        var video = document.getElementById('video-preview');
        video.srcObject = stream;
    })
    .catch(function(error) {
        console.log('Erro ao acessar a câmera: ', error);
    });
