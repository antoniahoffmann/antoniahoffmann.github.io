import * as mdb from 'mdb-ui-kit';

window.mdb = mdb;
import './styles.scss';

import { Modal, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Modal, Ripple });

import method from './content/content.md';
import mittagsyoga from './content/mittagsyoga.md';
import intro from './content/intro.md';
import impressum from './content/impressum.md';

document.body.querySelector(".method").innerHTML = method;
document.body.querySelector(".mittagsyoga").innerHTML = mittagsyoga;
document.body.querySelector(".intro").innerHTML = intro;
document.body.querySelector(".impressum-body").innerHTML = impressum;

function applyClassesToTables(containerSelector, ...classes) {
    const tables = document.querySelectorAll(containerSelector + ' table');
    tables.forEach(table => {
        classes.forEach(className => table.classList.add(className));
    });
}

applyClassesToTables(".method", "table", "table-borderless");
