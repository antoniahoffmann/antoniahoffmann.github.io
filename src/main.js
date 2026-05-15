import './styles.scss';

import method from './content/content.md';
import kurse from './content/Kurse.md';
import intro from './content/intro.md';
import impressum from './content/impressum.md';

document.body.querySelector('.method').innerHTML = method;
document.body.querySelector('.kurse-content').innerHTML = kurse;
document.body.querySelector('.intro').innerHTML = intro;
document.body.querySelector('.impressum-body').innerHTML = impressum;

const yearEl = document.body.querySelector('.year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
