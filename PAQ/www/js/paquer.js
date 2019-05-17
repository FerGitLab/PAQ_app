var app = {
    init: function () {
        var c = document.getElementsByClassName('contenido')[0];
        var u = JSON.parse(localStorage.getItem('usuario'))
        var p = new XMLHttpRequest();
        var i = 0;
        p.open('GET', `http://paq.web-informatica.info/Rest_PAQ/extras/viajeros/${u.id}`);
        p.onload = function () {
            var res = JSON.parse(p.responseText);
            if (p.status == 200 && p.readyState == 4) {
                document.getElementById('numero').textContent = `${res.length} viajeros`;
                res.map(data => {
                    c.innerHTML +=
                        `
                        <div class="paquer">
                            <div class="nombre">
                                <label class="checkbox"><b>${data.nombres} ${data.apellidos}</b>
                                <input type="checkbox"><input class="viaje" type="hidden" value="${data.viaje}"/>
                                <span class="check"></span>
                                </label>
                            </div>
                            <div class="descripcion">
                                <span> <b>Desde:</b> ${data.desde} - ${data.hasta}</span><br>
                                ${linea(data.fecha_hora)}
                            </div>
                        </div>
                    `;

                    i++
                    if (i == res.length || res.length == 0) {
                        c.innerHTML += '<a id="consultar">Consultar</a>';
                        document.getElementById('consultar').addEventListener('click', click);
                    }
                });
            }

        }
        p.send();

    }
};

function click() {
    var viajes = Array.from(document.getElementsByClassName('viaje'));
    var viajesArray = new Array();
    viajes.map(data => {
        if (data.previousElementSibling.checked) {
            viajesArray.push(data.value);
        }
    });
    sessionStorage.setItem('viajes', JSON.stringify(viajesArray));
    window.location = 'confirmaPago.html';
}

document.addEventListener('deviceready', app.init);

function mes(index) {
    var meses = Array.of('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
    return meses[index];
}

function linea(fecha) {
    dateTime = fecha.split(" ");

    var date = dateTime[0].split("-");
    var yyyy = date[0];
    var mm = date[1] - 1;
    var dd = date[2];

    return `<span><b>Fecha:</b> ${dd} de ${mes(mm)}-${yyyy}</span><br>`;
} 