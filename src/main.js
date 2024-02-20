import * as mdb from 'mdb-ui-kit';

window.mdb = mdb;
import './styles.scss';

import method from './content.md';
import mittagsyoga from './mittagsyoga.md';
import intro from './intro.md';

document.body.querySelector(".method").innerHTML = method;
document.body.querySelector(".mittagsyoga").innerHTML = mittagsyoga;
document.body.querySelector(".intro").innerHTML = intro;

function applyClassesToTables(containerSelector, ...classes) {
    const tables = document.querySelectorAll(containerSelector + ' table');
    tables.forEach(table => {
        classes.forEach(className => table.classList.add(className));
    });
}

applyClassesToTables(".method", "table", "table-borderless");
