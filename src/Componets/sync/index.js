import lodash from 'lodash-es';
const isArray = function (ags) {
    console.log('isArray', lodash.isArray(ags));
}
const to = function () {
    console.log('to');
}
export {
    isArray,
    to
}