let app ={
    init:function(){
        document.getElementById('boleto').addEventListener('click',()=>{
            app.openFile();
        });
    },
    success:function(data){
        window.plugins.toast.showShortCenter('Archivo cargado con exito');
    },
    error:function(error){
        console.log(error);
        window.plugins.toast.showShortCenter('No se ha cargado ningun archivo');
    },
    openFile:function(){
        fileChooser.open({
            'accept' : 'application/pdf,image/*',
            'capture': true
        },app.success,app.error);
    }
};

document.addEventListener('deviceready',app.init);