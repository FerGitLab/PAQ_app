window.addEventListener('load',()=>{
    alert('nuevo cod');
    document.getElementById('camara').addEventListener('click',()=>{
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.FILE_URI });
    });
});


function onSuccess(imageURI) {    
    alert(imageURI);
}

function onFail(message) {
    alert('Failed because: ' + message);
}