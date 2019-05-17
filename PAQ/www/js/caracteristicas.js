var img = '';
var app = {
    init: function () {
        document.getElementById('camara').addEventListener('click', () => {
            navigator.notification.confirm(
                '¿Quieres abrir tu camara o tu galeria?',
                app.onConfirm,
                'Elije una opcion',
                ['Camara', 'Galeria']
            );
        });
        document.getElementById('paquer').addEventListener('click', () => {
            var detalle = {
                'ancho': document.getElementById('ancho').value,
                'peso': document.getElementById('peso').value,
                'altura': document.getElementById('alto').value,
                'profundidad': document.getElementById('profundidad').value,
                'enlace': document.getElementById('enlace').value,
                'imagen': img
            };

            localStorage.setItem('detalle', JSON.stringify(detalle));
            window.location = "envio.html";
        });
    },
    tomarPick: function (sourcetype) {
        let opts = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: sourcetype,
            mediaType: Camera.MediaType.PICTURE,
            encodingType: Camera.EncodingType.JPEG
        };

        navigator.camera.getPicture(app.ftw, app.wtf, opts);
    },
    onConfirm: function (index) {
        if (index == 1) {
            app.tomarPick(Camera.PictureSourceType.CAMERA);
        }
        else if (index == 2) {
            app.tomarPick(Camera.PictureSourceType.PHOTOLIBRARY);
        }
    },
    ftw: function (imagen) {
        localStorage.setItem('foto', imagen);
        img = imagen;
        window.plugins.toast.showWithOptions(
            {
                message: 'Imagen cargada con exito',
                duration: 4000,
                position: 'center'
            }
        );
    },
    wtf: function (mssg) {
        console.error(('Error: ' + mssg));
        window.plugins.toast.showWithOptions(
            {
                message: 'No se ha cargado ningun archivo',
                duration: 4000,
                position: 'center'
            }
        );
    }
};

document.addEventListener('deviceready', app.init);