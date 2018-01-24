(()=>{
'use strict'

const REG_EX = /-/g;
const NEW_STR = '/';

/**
 * Checks if the value is a string
 *
 * @param {Object} val - The value to check.
 *
 * @returns {boolean} - Returns true if the value is a string, else false.
 */
function isString(val) {
    return Object.prototype.toString.call(val) === '[object String]';
}

/**
 * Checks if the value is an object
 *
 * @param {Object} val - The value to check.
 *
 * @returns {boolean} - Returns true if the value is an object, else false.
 */
function isObject(val) {
    return typeof val === 'object' && !!val;
}

/**
 * Modifies values in an object if it matches regEx.
 *
 * @param {Object} obj - The object to be parsed.
 *
 * @returns {Object} - Returns an object.
 */
function parseObject(obj) {
    Object.keys(obj).forEach( key => {
        let value = obj[key];
		if(isString(value)) {
            obj[key] = obj[key].replace(REG_EX, NEW_STR);
		} else if(isObject(value)) {
			//If the parsed value is still an object then call the function again(Recursive).
			parseObject(value);
		}
    });
    return obj;
}

/**
 * Transforms each element in the arry if it is an object, else return the element as is.
 *
 * @param {Object[]} objArr - Array of objects.
 *
 * @returns {Object[]} - Returns an array.
 */
function arrayHelper(objArr) {
    if(Array.isArray(objArr)) {
        for(let i=0; i<objArr.length; i++) {
            let obj = objArr[i];
            if(isObject(obj)) {
                obj = parseObject(obj);
            }
        }
    }
    return objArr;
}

module.exports = {
    isString: isString,
    isObject: isObject,
    parseObject: parseObject,
    arrayHelper: arrayHelper
}

})();