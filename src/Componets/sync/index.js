import lodash from 'lodash-es';
const isArray = function (ags) {
    console.log('isArray', lodash.isArray(ags));
}
import css from './style.index.css';
console.log( 'css');
const to = function () {
    console.log('to');
}
export {
    isArray,
    to
}
