import * as mdb from 'mdb-ui-kit';

window.mdb = mdb;
import './styles.scss';

import method from './content.md';
import mittagsyoga from './mittagsyoga.md';

document.body.querySelector(".method").innerHTML = method;
document.body.querySelector(".mittagsyoga").innerHTML = mittagsyoga;
