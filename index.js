import {Table} from './src/class/blocks.js'
import {rowCount, addRow} from './src/utils.js'



let $el = document.querySelector('table')
let table = new Table($el)
table.addRow('first')
table.addRow('two')
table.addRow('three')

table.list.forEach(task => 
    {$el.insertAdjacentHTML('beforeend', task.toHTML())})

