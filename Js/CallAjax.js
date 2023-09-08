
function LlamadaDepartamento() {

    var cmbDepartamento = document.getElementById('cmbDepartamento');
    
    var url = "";
    
    if (cmbDepartamento != null) {
        url = "https://censopoblacion.gt/indicadores/" + cmbDepartamento.value + "/999";
    }
    else {
        url = "";
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var divPeli = document.getElementById('divPeli');
            divPeli.innerHTML = "";
            if (data.length > 0) {
                for (let index = 0; index < data.length; index++) {
                    //const element = array[index];
                    const div = document.createElement("div");
                    div.className = "col-md-8";

                    const div2 = document.createElement("div");
                    div2.className = "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative";

                    const div3 = document.createElement("div");
                    div3.className = "col p-1 d-flex flex-column position-static";

                    const type = document.createElement("strong");
                    type.className = "d-inline-block mb-2 text-primary-emphasis";
                    type.innerText = data[index].nombre;

                    const title = document.createElement("h3");
                    title.className = "mb-0";
                    title.innerText = data[index].capital;

                    const anio = document.createElement("div");
                    anio.className = "mb-1 text-body-secondary";
                    anio.innerText = data[index].ext_territorial + " mts2";

                    const description = document.createElement("p");
                    description.className = "mb-1 text-body-secondary";
                    description.innerText = data[index].pob_total + " población aproximada";

                    const Total_lugares = document.createElement("p");
                    Total_lugares.className = "mb-1 text-body-secondary";
                    Total_lugares.innerText = data[index].total_lugares + " Lugares los cuales visitar";

                    const Porc_Hombres = document.createElement("p");
                    Porc_Hombres.className = "mb-1 text-body-secondary";
                    Porc_Hombres.innerText = data[index].porc_sexo_hombre + "% Hombres";

                    const Porc_Mujeres = document.createElement("p");
                    Porc_Mujeres.className = "mb-1 text-body-secondary";
                    Porc_Mujeres.innerText = data[index].porc_sexo_mujeres + "% Mujeres";

                    const ubication = document.createElement("a");
                    ubication.className = "icon-link gap-1 icon-link-hover stretched-link";

                    div3.appendChild(type);
                    div3.appendChild(title);
                    div3.appendChild(anio);
                    div3.appendChild(description);
                    div3.appendChild(Total_lugares);
                    div3.appendChild(Porc_Hombres);
                    div3.appendChild(Porc_Mujeres);
                    div3.appendChild(ubication);

                    const div4 = document.createElement("div");
                    div4.className = "col-auto d-none d-lg-block";
                    div4.innerHTML = "<img src=\"https://static.vecteezy.com/system/resources/previews/014/429/957/original/doodle-freehand-drawing-of-guatemala-map-free-png.png\" width=\"200\" height=\"250\">";

                    div2.appendChild(div3);
                    div2.appendChild(div4);
                    div.appendChild(div2);
                    divPeli.appendChild(div);

                    var ctx = document.getElementById('pieChart').getContext('2d');
                    var myChart = new Chart(ctx, {
                  type: 'pie',
                  data: {
                    labels: ['Hombres','Mujeres'],
                    datasets: [{
                      data: [data[0].porc_sexo_hombre,data[0].porc_sexo_mujeres],
                      backgroundColor: ['blue', 'pink', 'yellow', 'green']
                    }]
                  },
                  options: {
                    title: {
                      display: true,
                      text: 'POBLACIÓN POR SEXO'
                    }
                  }});

                  var ctx = document.getElementById('Pobl_Area').getContext('2d');
                  var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                  labels: ['Sector Urbano','Sector Rural'],
                  datasets: [{
                    data: [data[0].porc_sector_urbano,data[0].porc_sector_rural],
                    backgroundColor: ['yellow', 'green', 'yellow', 'green']
                  }]
                },
                options: {
                  title: {
                    display: true,
                    text: 'POBLACIÓN POR AREA'
                  }
                }});
                }

            }
        }
        );
}

function LlamadaMunicipio() {
    
    var cmbDepartamento = document.getElementById('cmbDepartamento');
    var cmbMunicipio = document.getElementById('cmbMunicipio');
    var url = "";
    
    if (cmbDepartamento != null) {
        url = "https://censopoblacion.gt/indicadores/" + cmbDepartamento.value + "/" + cmbDepartamento.value + cmbMunicipio.value;
    }
    else {
        url = "";
    }
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                var divPeli = document.getElementById('divguasta');
                divPeli.innerHTML = "";
                if (data.length > 0) {
                    for (let index = 0; index < data.length; index++) {
                        //const element = array[index];
                        const div = document.createElement("div");
                        div.className = "col-md-8";

                        const div2 = document.createElement("div");
                        div2.className = "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative";

                        const div3 = document.createElement("div");
                        div3.className = "col p-4 d-flex flex-column position-static";

                        const type = document.createElement("strong");
                        type.className = "d-inline-block mb-2 text-primary-emphasis";
                        type.innerText = "MUNICIPIO DE:";

                        const title = document.createElement("h3");
                        title.className = "mb-0";
                        title.innerText = data[index].nombre;

                        const anio = document.createElement("div");
                        anio.className = "mb-1 text-body-secondary";
                        anio.innerText = data[index].ext_territorial + " mts2";

                        const description = document.createElement("p");
                        description.className = "mb-1 text-body-secondary";
                        description.innerText = data[index].pob_total + " población aproximada";

                        const Total_lugares = document.createElement("p");
                        Total_lugares.className = "mb-1 text-body-secondary";
                        Total_lugares.innerText = data[index].total_lugares + " Lugares los cuales visitar";

                        const Porc_Hombres = document.createElement("p");
                        Porc_Hombres.className = "mb-1 text-body-secondary";
                        Porc_Hombres.innerText = data[index].porc_sexo_hombre + "% Hombres";

                        const Porc_Mujeres = document.createElement("p");
                        Porc_Mujeres.className = "mb-1 text-body-secondary";
                        Porc_Mujeres.innerText = data[index].porc_sexo_mujeres + "% Mujeres";

                        const ubication = document.createElement("a");
                        ubication.className = "icon-link gap-1 icon-link-hover stretched-link";

                        div3.appendChild(type);
                        div3.appendChild(title);
                        div3.appendChild(anio);
                        div3.appendChild(description);
                        div3.appendChild(Total_lugares);
                        div3.appendChild(Porc_Hombres);
                        div3.appendChild(Porc_Mujeres);
                        div3.appendChild(ubication);

                        const div4 = document.createElement("div");
                        div4.className = "col-auto d-none d-lg-block";
                        div4.innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Mapa_de_Guatemala_%28subdivisiones%29.svg/800px-Mapa_de_Guatemala_%28subdivisiones%29.svg.png\" width=\"200\" height=\"250\">";

                        div2.appendChild(div3);
                        div2.appendChild(div4);
                        div.appendChild(div2);
                        divPeli.appendChild(div);
                        
                        var ctx = document.getElementById('Pobl_sexo').getContext('2d');
                    var myChart = new Chart(ctx, {
                  type: 'pie',
                  data: {
                    labels: ['Hombres','Mujeres'],
                    datasets: [{
                      data: [data[0].porc_sexo_hombre,data[0].porc_sexo_mujeres],
                      backgroundColor: ['blue', 'pink', 'yellow', 'green']
                    }]
                  },
                  options: {
                    title: {
                      display: true,
                      text: 'POBLACIÓN POR SEXO'
                    }
                  }});

                  var ctx = document.getElementById('Pobl_Area2').getContext('2d');
                  var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                  labels: ['Sector Urbano','Sector Rural'],
                  datasets: [{
                    data: [data[0].porc_sector_urbano,data[0].porc_sector_rural],
                    backgroundColor: ['yellow', 'green', 'yellow', 'green']
                  }]
                },
                options: {
                  title: {
                    display: true,
                    text: 'POBLACIÓN POR AREA'
                  }
                }});
                    
                    }

                }
            }
            );

}