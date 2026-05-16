import './styles.scss';

import method from '../content/content.md';
import kurse from '../content/Kurse.md';
import intro from '../content/intro.md';
import impressum from '../content/impressum.md';

const methodEl = document.body.querySelector<HTMLElement>('.method');
if (methodEl) methodEl.innerHTML = method;

const kurseEl = document.body.querySelector<HTMLElement>('.kurse-content');
if (kurseEl) kurseEl.innerHTML = kurse;

const introEl = document.body.querySelector<HTMLElement>('.intro');
if (introEl) introEl.innerHTML = intro;

const impressumBodyEl = document.body.querySelector<HTMLElement>('.impressum-body');
if (impressumBodyEl) impressumBodyEl.innerHTML = impressum;

const yearEl = document.body.querySelector<HTMLElement>('.year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const dialog = document.querySelector<HTMLDialogElement>('.impressum-dialog');
document.querySelectorAll('[data-open-impressum]').forEach((btn) => {
  btn.addEventListener('click', () => dialog?.showModal());
});
document.querySelectorAll('[data-close-impressum]').forEach((btn) => {
  btn.addEventListener('click', () => dialog?.close());
});
dialog?.addEventListener('click', (e) => {
  if (e.target === dialog) dialog.close();
});
