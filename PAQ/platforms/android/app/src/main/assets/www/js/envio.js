var app = {
    init: function () {
        var detalle = JSON.parse(localStorage.getItem('detalle'));
        document.getElementById('camara').src = 'data:image/jpg;base64,' + detalle.imagen;

        document.getElementById('pais').addEventListener('change', function () {
            document.getElementById('ciudad').innerHTML = crearOption(this.value);
        });

        document.getElementById('viajero').addEventListener('click', () => {
            var pais = document.getElementById('pais').value;
            var ciudad = document.getElementById('ciudad').value;
            if (pais !== null && pais != undefined && pais != "" && ciudad !== null && ciudad != undefined && ciudad != "") {
                detalle.pais = pais;
                detalle.ciudad = ciudad;
                localStorage.setItem('detalle', JSON.stringify(detalle));
                window.location = 'previaPaquete.html';
            }else if(pais === null || pais == undefined || pais == ""){
                alert('Debe seleccionar un pais');
            }else{
                alert('Debe seleccionar una ciudad');
            }
        });
    }
};

document.addEventListener('deviceready', app.init);
var es = Array.of('San Salvador', 'San Miguel', 'Cabañas', 'La Libertad', 'La Union', 'Morazán', 'Cuscatlan', 'La Paz', 'Sonsonate', 'Santa Ana');
var ue = Array.of('New York', 'Los Ángeles', 'Miami', 'San Francisco', 'Chicago', 'Las Vegas', 'Boston', 'Dallas', 'Seattle', 'Honolulu');

function crearOption(pais) {
    var ciudades = pais == 'El Salvador' ? es : pais == 'Estados Unidos' ? ue : null;
    var r = `<option value="">Seleccione ciudad</option>`;
    if (ciudades !== null && ciudades != undefined) {
        ciudades.map(c => {
            r += `<option value="${c}">${c}</option>`;
        });
        document.getElementById('ciudad').style.display = 'inline-block';
    } else {
        document.getElementById('ciudad').style.display = 'none';
    }
    console.log(r);
    return r;
}