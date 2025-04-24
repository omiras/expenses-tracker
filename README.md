# Expenses Trackers

Queremos crear un gestor de gastos parecido a [esto proyecto](https://roadmap.sh/projects/expense-tracker) pero con algunos cambios para simplificarlo y potenciar otras areas de la programación

## Arquitectura

La aplicación es un script de NODEJS que permite añadir, listar, resumir, borrar, filtrar y ordenar una serie de gastos. La información se guarda de forma persistente en el fichero **expenses.json**

## Iteración 1

Comando a implementar:  `node script.js --list`

Crea el código mínimo y necesario para mostrar todos los gastos por el terminal siguiendo este formato:

![](https://oscarm.tinytake.com/media/1756551?filename=1745493512704_TinyTake24-04-2025-01-18-27_638810903113094989.png&sub_type=thumbnail_preview&type=attachment&width=400&height=103)

## Iteración 2

Comando a implementar:  `node script.js --summary`

Devuelve un mensaje por el terminal indicando el gasto total acumulado

## Iteración 3

Comando a implementar:  `node script.js --filter-category Food`

Muestra por eltemrinal todos los gastos igual que hemos hecho en la Iteración 1, pero esta vez, solo aquellos que sean de la cateogría "Food". El script debe funcionar obviamente también para cualquier categoría.

## Iteración 4

Comando a implementar: `node script.js --add "Flight Ticket" "Transport" 299`

Añade un nuevo gasto y lo guarda en el fichero __expenses.json__


## Iteración 5

Comando a implementar: `node script.js --delete 3`

Elimina el gasto con el identificador 3 y guarda los cambios en el fichero __expenses.json__

## Iteración 6: Chat GPT desencadenado

Comando a implementar: `node script.js --export-file expenses.csv`

Exporta el contenido del fichero expenses.json a un fichero de formato CSV





