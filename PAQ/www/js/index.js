
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        document.getElementById('enviar').addEventListener('click', () => {
            var c = localStorage.getItem('usuario');
            if (c === undefined || c === null || c === '') {
                localStorage.setItem('rol', 2);
                window.location = "pages/login.html";
            } else {
                window.location = "pages/menuCliente.html";
            }
        });

        document.getElementById('entregar').addEventListener('click', () => {
            var u = localStorage.getItem('usuario');
            if (u === undefined || u === null || u === '') {
                localStorage.setItem('rol', 3);
                window.location = "pages/login.html";
            } else {
                window.location = "pages/menuPaquer.html";
            }
        });
    }
};

app.initialize();