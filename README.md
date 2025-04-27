# Expenses Trackers

Queremos crear un gestor de gastos parecido a [esto proyecto](https://roadmap.sh/projects/expense-tracker) pero con algunos cambios para simplificarlo y potenciar otras areas de la programación.

## Arquitectura

La aplicación es un script de NODEJS que permite añadir, listar, resumir, borrar, filtrar y ordenar una serie de gastos. La información se guarda de forma persistente en el fichero **expenses.json**

## Iteración 1

Comando a implementar:  `node script.js --list`

Crea el código mínimo y necesario para mostrar todos los gastos por el terminal siguiendo este formato:

![](https://oscarm.tinytake.com/media/1757c44?filename=1745747365652_TinyTake27-04-2025-11-49-20_638813441634408833.png&sub_type=thumbnail_preview&type=attachment&width=796&height=1)

Practica el bucle [for..of](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of#pru%C3%A9balo)

## Iteración 2

Comando a implementar:  `node script.js --summary`

Devuelve un mensaje por el terminal indicando el gasto total acumulado.

![](https://oscarm.tinytake.com/media/1757c49?filename=1745747971838_TinyTake27-04-2025-11-59-28_638813447695055042.png&sub_type=thumbnail_preview&type=attachment&width=795&height=39)

Estamos ante una operación habitual de recorrer un array y acumular un valor. [ejemplo](https://github.com/omiras/ejemplos-javascript-pimec-front-end/blob/main/arrays/manera-recorrer-arrays.js)

## Iteración 3

Comando a implementar:  `node script.js --filter-category food`

Muestra por eltemrinal todos los gastos igual que hemos hecho en la Iteración 1, pero esta vez, solo aquellos que sean de la cateogría "Food". El script debe funcionar obviamente también para cualquier categoría.

![](https://oscarm.tinytake.com/media/1757c4f?filename=1745748451175_TinyTake27-04-2025-12-07-26_638813452488731152.png&sub_type=thumbnail_preview&type=attachment&width=1192&height=129)

## Iteración 4

Comando a implementar `node script.js --find 3`

Muestra por consola **únicamente** el gadto con id = 3. O cualquier otro _id_ que se pase como argumento

![](https://oscarm.tinytake.com/media/1757c57?filename=1745748801700_TinyTake27-04-2025-12-13-14_638813455995692796.png&sub_type=thumbnail_preview&type=attachment&width=785&height=41)

## Iteración 5

Comando a implementar: `node script.js --add "Flight Ticket" "Transport" 299`

Añade un nuevo gasto y lo guarda en el fichero __expenses.json__

## Iteración 6

Comando a implementar: `node script.js --delete 3`

Elimina el gasto con el identificador 3 y guarda los cambios en el fichero __expenses.json__

## Iteración 7: Chat GPT guiado

Usa Chat GPT para utilizar el método de array _sort_ adecudamente y poder ordenar

Comando a implementar: `node script.js --sort ASC`

Muestra todo los gastos ordenador de forma creciente

Comando a implementar: `node script.js --sort DESC`

Muestra todos los gatos ordenados de foram decreciente

## Iteración 8: Chat GPT desencadenado

Comando a implementar: `node script.js --export-file expenses.csv`

Usa Chat GPT para crear un comando que permita exportar el contenido del fichero expenses.json a un fichero de formato CSV. 

## Bonus 1

Mueve el fichero expenses.json a la carpeta **files** (tendrás que crearla). Modifica tu script para que ahora consuma el fichero de esa carpeta. Utiliza el módulo interno [**path**](https://www.w3schools.com/nodejs/met_path_join.asp) para acceder al a la ruta del fichero e investiga porque esto se considera una práctica.

## Bonus 2


Investiga como la biblioteca [Commander](https://www.npmjs.com/package/commander) puede ayudarte a crear programa de línea de comandos y vuelve a implementar el ejercicio usando esta herramienta. P







