
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        document.getElementById('enviar').addEventListener('click',()=>{
            window.location = 'pages/envio.html';
        });
        
        document.getElementById('entregar').addEventListener('click',()=>{
            alert('Gracias por entregar');
        });

        
    }
};

app.initialize();
