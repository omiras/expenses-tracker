# Expenses Trackers

Queremos crear un gestor de gastos parecido a [esto proyecto](https://roadmap.sh/projects/expense-tracker) pero con algunos cambios para simplificarlo y potenciar otras areas de la programación

## Arquitectura

La aplicación es un script de NODEJS que permite añadir, listar, resumir, borrar, filtrar y ordenar una serie de gastos. La información se guarda de forma persistente en el fichero **expenses.json**

## Iteración 1

Comando a implementar:  `node script.js --list`

Crea el código mínimo y necesario para mostrar todos los gastos por el terminal siguiendo este formato:

![](https://oscarm.tinytake.com/media/1757c44?filename=1745747365652_TinyTake27-04-2025-11-49-20_638813441634408833.png&sub_type=thumbnail_preview&type=attachment&width=796&height=150)


## Iteración 2

Comando a implementar:  `node script.js --summary`

Devuelve un mensaje por el terminal indicando el gasto total acumulado

## Iteración 3

Comando a implementar:  `node script.js --filter-category Food`

Muestra por el temrinal todos los gastos igual que hemos hecho en la Iteración 1, pero esta vez, solo aquellos que sean de la cateogría "Food". El script debe funcionar obviamente también para cualquier categoría.

## Iteración 4

Comando a implementar `node script.js --find 3`

Muestra por consola **únicamente** el gato con id = 3

## Iteración 5

Comando a implementar: `node script.js --add "Flight Ticket" "transport" 299`
Como fecha añadir la fecha actual.

Añade un nuevo gasto y lo guarda en el fichero __expenses.json__

![](https://oscarm.tinytake.com/media/1757eee?filename=1745820326065_TinyTake28-04-2025-08-05-19_638814171254094956.png&sub_type=thumbnail_preview&type=attachment&width=1198&height=291)

## Iteración 6

Comando a implementar: `node script.js --delete 3`

Elimina el gasto con el identificador 3 y guarda los cambios en el fichero __expenses.json__

¡Atención! Este ejercicio es más complejo de lo que parece. Eliminar un elemento en un array puede ser problemático porque los índices son modificados. 

![](https://oscarm.tinytake.com/media/1759cd5?filename=1745994650287_TinyTake30-04-2025-08-30-45_638815914483409219.png&sub_type=thumbnail_preview&type=attachment&width=795&height=143)

## Iteración 7: Chat GPT guiado

Usa Chat GPT para utilizar el método de array _sort_ adecudamente y poder ordenar

Comando a implementar: `node script.js --sort ASC`

Muestra todo los gastos ordenador de forma creciente

Comando a implementar: `node script.js --sort DESC`

Muestra todos los gatos ordenados de foram decreciente

## Iteración 8: Chat GPT desencadenado

Comando a implementar: `node script.js --export-file expenses.csv`

Usa Chat GPT para crear un comando que permita exportar el contenido del fichero expenses.json a un fichero de formato CSV. 

## Bonus

Investiga como la biblioteca [Commander](https://www.npmjs.com/package/commander) puede ayudarte a crear programa de línea de comandos y vuelve a implementar el ejercicio usando esta herramienta. P







