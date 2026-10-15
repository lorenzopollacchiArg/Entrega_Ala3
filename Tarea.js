const prompt = require('prompt-sync')();

function Tarea(titulo, descripcion = "", dificultad = 1, fechaVencimiento = null) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = "Pendiente";
    this.fechaVencimiento = fechaVencimiento;
    this.fechaCreacion = new Date();
    this.cambiarDificultad(dificultad);
}

Tarea.prototype.cambiarEstado = function(nuevoEstado) {
    if (nuevoEstado == 1) {
        this.estado = "Pendiente";
     } else if (nuevoEstado == 2) {
        this.estado = "En progreso";
     }  else if (nuevoEstado == 3) {
        this.estado = "Completada";
     } else if (nuevoEstado == 4) {
        this.estado = "Cancelada";
    }
};

Tarea.prototype.cambiarDificultad = function(opcion) {
    if (opcion == 1) {
        this.dificultad = "Facil - ⭐";
    } else if (opcion == 2) {
        this.dificultad = "Media - ⭐⭐";
    } else if (opcion == 3) {
        this.dificultad = "Argentina papa (Dificil) - ⭐⭐⭐";
    }
};

Tarea.prototype.agregarVencimiento = function() {
    console.log('Ingrese los datos para establecer la fecha de vencimiento de la tarea:');
    let dia = parseInt(prompt('ingrese el dia de vencimiento '), 10);
   while (dia < 1 || dia > 31) {
        dia = parseInt(prompt('ingrese el dia de vencimiento '), 10);
       }
    let mes = parseInt(prompt('ingrese el mes de vencimiento. '), 10);
    while (mes < 1 || mes > 12) {
        mes = parseInt(prompt('ingrese el mes de vencimiento '), 10);
    }
    let anio = parseInt(prompt('ingrese el año de vencimiento' ), 10);
    while (anio < 2026 || anio > 2100) {
        anio = parseInt(prompt('ingrese el año de vencimiento' ), 10);
    }
  
    this.fechaVencimiento = new Date(anio, mes - 1, dia);
};

Tarea.prototype.mostrarTarea = function() {
    let vencimientoTexto = this.fechaVencimiento ? this.fechaVencimiento.toLocaleDateString() : "No tiene fecha de vencimiento";
     let descripcionTexto = this.descripcion ? this.descripcion : "No tiene descripcion";

    console.log(`Titulo: ${this.titulo}`);
    console.log(`Descripcion: ${descripcionTexto}`);
    console.log(`Estado: ${this.estado}`);
    console.log(`Dificultad: ${this.dificultad}`);
    console.log(`Fecha de creacion: ${this.fechaCreacion.toLocaleString()}`);
    console.log(`Fecha de vencimiento: ${vencimientoTexto}`);
};

Tarea.prototype.editarTarea = function() {
    let continuar;
   
    do {
              console.log(`Ingrese que desea editar: 1- Titulo | 2- Descripcion | 3- Dificultad | 4- Estado | 5- Fecha de vencimiento`);
              let opEditar = parseInt(prompt("> "), 10);
              while (opEditar< 1 || opEditar> 5) {
                console.log(`Ingrese que desea editar: 1- Titulo | 2- Descripcion | 3- Dificultad | 4- Estado | 5- Fecha de vencimiento`);
                opEditar= parseInt(prompt("> "), 10);
              }
              switch (opEditar){
                case 1: 
                 console.log(`Ingrese el nuevo titulo de la tarea`);
                 let nuevoTitulo = prompt("> "); 
                 while (nuevoTitulo .trim()==="" || !nuevoTitulo){
                  console.log("El título no puede estar vacío. Ingrese el título: ");
                  nuevoTitulo = prompt("> ");
                 }
                  this.titulo = nuevoTitulo;
                break;

                case 2: 
                console.log(`Ingrese la nueva descripcion de la tarea`);
                let nuevaDescripcion = prompt("> ");
                
                this.descripcion = nuevaDescripcion;
                break;

                case 3: 
                console.log(`Ingrese la nueva dificultad de la tarea 1- Facil | 2- Media | 3- Dificil`);
                let nuevaDificultad = parseInt(prompt("> "),10);
                while (nuevaDificultad < 1 || nuevaDificultad > 3) {
                  console.log(`Ingrese la nueva dificultad de la tarea 1- Facil | 2- Media | 3- Dificil`);
                  nuevaDificultad = parseInt(prompt("> "),10);
                }
                this.cambiarDificultad(nuevaDificultad);
                break;

                case 4: 
                console.log(`Ingrese el nuevo estado de la tarea 1- Pendiente | 2- En progreso | 3- Completada | 4- Cancelada`);
                let nuevoEstado = parseInt(prompt("> "),10);
                while (nuevoEstado < 1 || nuevoEstado > 4) {
                  console.log(`Ingrese el nuevo estado de la tarea 1- Pendiente | 2- En progreso | 3- Completada | 4- Cancelada`);
                  nuevoEstado = parseInt(prompt("> "),10);
                }
                 this.cambiarEstado(nuevoEstado);
                break;

                case 5: 
                this.agregarVencimiento();
                break;  
              }
              console.log(`Desea editar otra cosa de la tarea? 1- Si | 2- No`);
              continuar = parseInt(prompt("> "), 10);
              while (continuar < 1 || continuar > 2) {
                console.log(`Desea editar otra cosa de la tarea? 1- Si | 2- No`);
                continuar = parseInt(prompt("> "), 10);
              }
              } while (continuar === 1);
            }


module.exports = Tarea;
// prueba 
