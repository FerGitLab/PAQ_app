var acc;
var perfil;
var DUI_img;
var pasaporte_img;
var usuario = JSON.parse(localStorage.getItem('user'));
let app = {
    init: function () {
        var imgs = Array.from(document.getElementsByClassName('upload'));
        imgs.map(e => {
            e.addEventListener('click', function () {
                acc = this.id;
                navigator.notification.confirm(
                    'Quieres abrir tu camara o tu galeria',
                    app.confirm,
                    'Elige una opcion',
                    ['Camara', 'Galeria']
                );
            });
        });
    },
    camara: function (sourcetype) {
        navigator.camera.getPicture(app.success, app.error, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            mediaType: Camera.MediaType.PICTURE,
            encodingType: Camera.EncodingType.JPEG,
            sourceType: sourcetype
        });
    },
    success: function (imagen) {
        (acc == 'perfil' ? usuario.perfil = imagen : acc == 'DUI_img' ? usuario.dui = imagen : usuario.pasaporte_img = imagen)
        localStorage.setItem('user', JSON.stringify(usuario));

        window.plugins.toast.showWithOptions(
            {
                message: 'Imagen cargada con exito',
                duration: 4000,
                position: 'center'
            }
        );
    },
    error: function (message) {
        window.plugins.toast.showWithOptions(
            {
                message: 'No se ha cargado ninguna imagen',
                duration: 4000,
                position: 'center'
            }
        );
    },
    confirm: function (index) {
        if (index == 1) {
            app.camara(Camera.PictureSourceType.CAMERA);
        } else if (index == 2) {
            app.camara(Camera.PictureSourceType.PHOTOLIBRARY);
        }
    }
};

document.addEventListener('deviceready', app.init);