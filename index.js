const Tarea = require('./Tarea');
const prompt = require('prompt-sync')();

const tareas = [];

let continuar;
let deseaEditar;

// menu principal 
do {
console.log(`bienvenido/a, ingrese una opcion para continuar: `);

console.log(`1- Agregar tarea | 2- Ver Tareas | 3- Buscar una tarea)`);
let opcionMenu1 = parseInt(prompt("> "),10);
while (opcionMenu1 < 1 || opcionMenu1 > 3) {
    console.log(`1- Agregar tarea | 2- Ver Tareas | 3- Buscar una tarea)`);
    opcionMenu1 = parseInt(prompt("> "),10);
}

switch (opcionMenu1) {
    case 1:
      do{
        console.log(`ingrese el titulo de la tarea`);
        let titulo = prompt("> ");
        while (titulo.trim() === "" || !titulo){
          console.log("El título no puede estar vacío. Ingrese el título: ");
          titulo = prompt("> ");
        }
  
        console.log(`ingrese la descripcion de la tarea`);
        let descripcion = prompt("> ");
        while (descripcion.trim() === "" || !descripcion){
          console.log("La descripción no puede estar vacía,  Ingrese la descripción: ");
          descripcion = prompt("> ");
        }

        console.log(`ingrese la dificultad de la tarea 1- Facil | 2- Media | 3- Dificil`);
        let dificultad= parseInt(prompt("> "),10);
        while (dificultad < 1 || dificultad > 3) {
          console.log(`ingrese la dificultad de la tarea 1- Facil | 2- Media | 3- Dificil`);
          dificultad = parseInt(prompt("> "),10);
        }
  
        let nuevaTarea = new Tarea(titulo, descripcion, dificultad);
  
        console.log(`ingrese el estado de la tarea 1- Pendiente | 2- En progreso | 3- Completada | 4- Cancelada`);
        let estado = parseInt(prompt("> "),10);
          while (estado < 1 || estado > 4) {
              console.log(`ingrese el estado de la tarea 1- Pendiente | 2- En progreso | 3- Completada | 4- Cancelada`);
              estado = parseInt(prompt("> "),10);
          }
                  
        nuevaTarea.cambiarEstado(estado);
        console.log(`Desea agregar fecha de vencimiento? 1- Si | 2- No`);
        let respuestaFecha = parseInt(prompt(`>`));
        while(respuestaFecha < 1 || respuestaFecha > 2){
          console.log(`Desea agregar fecha de vencimiento? 1- Si | 2- No`);
         respuestaFecha = parseInt(prompt(`>`));
        }
        if (respuestaFecha == 1){
        console.log(`ingrese la fecha de vencimiento de la tarea`);
        nuevaTarea.agregarVencimiento();
        }
        
  
        tareas.push(nuevaTarea);

        console.log(`Desea agregar otra tarea? 1- Si | 2- No`);
        continuar = parseInt(prompt("> "),10);

        while (continuar < 1 || continuar > 2) {
          console.log(`Desea agregar otra tarea? 1- Si | 2- No`);
          continuar = parseInt(prompt("> "),10);
        }

        }while(continuar === 1);

    break; 

    case 2: 

       if (tareas.length === 0) {
        console.log(`No hay tareas registradas.`);
        break
       }

       console.log(` Menu ver tareas: Ingrese una opcion para continuar:`);
       console.log(`1- Ver todas las tareas | 2- Ver tareas pendientes | 3- Ver tareas en progreso | 4- Ver tareas completadas | 5- Ver tareas canceladas`);
       let opcionMenu2 = parseInt(prompt("> "),10);
       while (opcionMenu2 < 1 || opcionMenu2 > 5) {
          console.log(`1- Ver todas las tareas | 2- Ver tareas pendientes | 3- Ver tareas en progreso | 4- Ver tareas completadas | 5- Ver tareas canceladas`);
          opcionMenu2 = parseInt(prompt("> "),10);
       }

       switch (opcionMenu2) {
      
           case 1: 
           // ver todas las tareas
           tareas.forEach((tareas , i) => {
             console.log(`${i + 1}  ${tareas.titulo}`);
           });
         
           console.log(`Ingrese el numero de la tarea que desea ver`);
           let numTarea1 = parseInt(prompt("> "), 10);
           if (numTarea1 > 0 && numTarea1 <= tareas.length){
         
             tareas[numTarea1 - 1].mostrarTarea();
         
             console.log(`Desea editar la tarea? 1- Si | 2- No`);
              deseaEditar = parseInt(prompt("> "), 10);
         
             while (deseaEditar < 1 || deseaEditar > 2){
               console.log(`Ingrese una opcion correcta 1-Si | 2- No`);
               deseaEditar = parseInt(prompt(`>`),10);
             }
             if (deseaEditar === 1) {
               tareas[numTarea1 - 1].editarTarea();
             }
           } else if (numTarea1 < 1 || numTarea1 > tareas.length) {
             console.log(`Numero de tarea invalido`);
           } 
        break;  
        
          case 2:
           let  pendientes = tareas.filter(t => t.estado === "Pendiente");
         
           if (pendientes.length === 0) {
             console.log(`No hay tareas pendientes.`);
             break;
            }

            pendientes.forEach((tareas , i) => {
              console.log(`${i + 1}  ${tareas.titulo}`);
            });

            console.log(`Ingrese el numero de la tarea de desea ver`);
            let numTarea2 = parseInt(prompt("> "), 10);
            if (numTarea2 > 0 && numTarea2 <= pendientes.length){

              pendientes[numTarea2 - 1].mostrarTarea();

              console.log(`Desea editar la tarea? 1- Si | 2- No`);
               deseaEditar = parseInt(prompt("> "), 10);

               while (deseaEditar < 1 || deseaEditar > 2){
                 console.log(`Ingrese una opcion correcta 1-Si | 2- No`);
                 deseaEditar = parseInt(prompt(`>`),10);
                }
              if (deseaEditar === 1) {
                pendientes[numTarea2 - 1].editarTarea();
              }
          } else if (numTarea2 < 1 || numTarea2 > pendientes.length) {
            console.log(`Numero de tarea invalido`);
          } 
        
          break;
     
          case 3:
            let enProgreso = tareas.filter(t=> t.estado === "En progreso");

            if (enProgreso.length == 0) {
              console.log(`No hay tareas en progreso.`);
              break;
            }

            enProgreso.forEach((tareas , i) =>{
              console.log(`${i + 1}  ${tareas.titulo}`);
            });

            console.log(`Ingrese el numero de la tarea de desea ver`);
            let numTarea3 = parseInt(prompt("> "), 10);
            if (numTarea3 > 0 && numTarea3 <= enProgreso.length){

              enProgreso[numTarea3 - 1].mostrarTarea();

              console.log(`Desea editar la tarea? 1- Si | 2- No`);
               deseaEditar = parseInt(prompt("> "), 10);

               while (deseaEditar < 1 || deseaEditar > 2){
                  console.log(`Ingrese una opcion correcta 1-Si | 2- No`);
                  deseaEditar = parseInt(prompt(`>`),10);
                }

              if (deseaEditar === 1) {
                enProgreso[numTarea3 - 1].editarTarea();
              }

            } else if (numTarea3 < 1 || numTarea3 > enProgreso.length) {
              console.log(`Numero de tarea invalido`);
            }     

          break;
  
          case 4: 
           let completadas = tareas.filter(t=> t.estado === "Completada");

           if(completadas.length == 0){
            console.log(`No hay tareas completadas.`)
              break;
            }

           completadas.forEach((tareas , i)=> {
            console.log(`${i + 1} ${tareas.titulo}`);
           });

           console.log(`Ingrese el numero de la tarea que desea ver`);
           let numTarea4 = parseInt(prompt(`>`));

           if (numTarea4 > 0 && numTarea4 <= completadas.length){
            completadas[numTarea4 -1 ].mostrarTarea();
            
            console.log(`Desea editar la tarea? 1-Si | 2- No`);
             deseaEditar = parseInt(prompt(`>`),10);

            while (deseaEditar < 1 || deseaEditar > 2){
              console.log(`Ingrese una opcion correcta 1-Si | 2- No`);
              deseaEditar = parseInt(prompt(`>`),10);
            }

            if (deseaEditar == 1){
              completadas[numTarea4 - 1].editarTarea();
            }

            }else if(numTarea4 < 1 || numTarea4 > completadas.length) {
              console.log(`Numero de tarea invalido`);
            }

          break;
  
          case 5:
            let canceladas = tareas.filter(t=> t.estado === "Cancelada")
            if (canceladas.length == 0){
               console.log(`No hay tareas canceladas..`);
               break;
             }

            canceladas.forEach((tareas , i)=> {
              console.log(`${i + 1}  ${tareas.titulo} `);
            });

            console.log(`Ingrese el numero de la tarea que desa ver: `);
            let numTarea5 = parseInt(prompt(`>`),10);
            
            if(numTarea5 > 0 && numTarea5 <= canceladas.length){
             canceladas[numTarea5 -1].mostrarTarea(); 

             console.log(`Desea editar la tarea? 1-Si | 2- No`);
             deseaEditar = parseInt(prompt(`>`),10);

              while (deseaEditar < 1 || deseaEditar > 2){
                console.log(`Ingrese una opcion correcta 1-Si | 2- No`);
                deseaEditar = parseInt(prompt(`>`),10);
              }

             if (deseaEditar == 1){
                canceladas[numTarea5- 1].editarTarea();
              }
            } else if(numTarea5 < 1 || numTarea5 > canceladas.length) {
              console.log(`Numero de tarea invalido`);
            }
            
          break; 

          default: 
          console.log(`opcion invalida`);
        }  
        break; 

        case 3:
         if (tareas.length === 0) {
           console.log(`No hay tareas registradas para buscar.`);
           break;
         }

         console.log(`Ingrese el titulo o palabra clave de la tarea a buscar:`);
         let palabraBuscar = prompt("> ");

         while (palabraBuscar.trim() === "" || !palabraBuscar) {
           console.log(`La busqueda no puede estar vacia. Ingrese una palabra clave:`);
           palabraBuscar = prompt("> ");
         }

     
      
         let encontradas = tareas.filter(t => 
             t.titulo.toLowerCase().includes(palabraBuscar.toLowerCase())
           );
     
          if (encontradas.length === 0) {
          console.log(`No se encontraron tareas con ese titulo.`)
     
            break;
          }

      
          console.log(`Tareas encontradas:`);

           encontradas.forEach((tareas, i) => {
           console.log(`${i + 1}  ${tareas.titulo}`);

          });

         
         console.log(`Ingrese el numero de la tarea que desea ver`);
         let numTareaBuscar = parseInt(prompt("> "), 10);
   
         if (numTareaBuscar > 0 && numTareaBuscar <= encontradas.length) {
           encontradas[numTareaBuscar - 1].mostrarTarea();
   
           console.log(`Desea editar la tarea? 1- Si | 2- No`);
           deseaEditar = parseInt(prompt("> "), 10);
   
           while (deseaEditar < 1 || deseaEditar > 2) {
             console.log(`Ingrese una opcion correcta 1-Si | 2- No`);
             deseaEditar = parseInt(prompt(`>`), 10);
           }
   
           if (deseaEditar === 1) {
   
             encontradas[numTareaBuscar - 1].editarTarea();
           }
         } else if (numTareaBuscar < 1 || numTareaBuscar > encontradas.length) {
           console.log(`Numero de tarea invalido`);
         }
   
          break;
      
            }
              console.log(`Desea volver al menu principal? 1- Si | 2- No`);
              continuar = parseInt(prompt("> "), 10);
              while (continuar < 1 || continuar > 2) {
                  console.log(`Desea volver al menu principal? 1- Si | 2- No`);
                  continuar = parseInt(prompt("> "), 10);
              }
              } while (continuar === 1);