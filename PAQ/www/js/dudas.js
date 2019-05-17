var  chooser = {
    init:function(){
        document.getElementById('subir').addEventListener('click',()=>{
            fileChooser.open(
                {
                    'accept' : 'application/pdf,image/*',
                    'capture': true
                },
                function(uri) {
                window.plugins.toast.showWithOptions(
                    {
                        message : 'Archivo cargado con exito',
                        duration : 4000,
                        position : 'center'
                    }
                );
            },
            function(error){
                console.log(error);
                window.plugins.toast.showWithOptions(
                    {
                        message : 'No se ha cargado ningun archivo',
                        duration : 4000,
                        position : 'center'
                    }
                );
            }
            );
        });
    }
};

document.addEventListener('deviceready',chooser.init);