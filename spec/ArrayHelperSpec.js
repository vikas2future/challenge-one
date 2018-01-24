(()=>{
    'use strict'

    const arrHelperUtil = require('../ArrayHelper');

    describe('Array Helper:', () => {

        describe('isString:', () => {
            it('should return true when the input is string literal.', () => {
                expect(arrHelperUtil.isString('literal')).toBe(true);
            });

            it('should return false when the input is an object.', () => {
                expect(arrHelperUtil.isString({})).toBe(false);
            });

            it('should return true when the input is Object string.', () => {
                expect(arrHelperUtil.isString(new String('literal'))).toBe(true);
            });

            it('should return false when the input is null', () => {
                expect(arrHelperUtil.isString(null)).toBe(false);
            });

            it('should return false when the input is undefined', () => {
                expect(arrHelperUtil.isString()).toBe(false);
            });
        });

        describe('isObject:', () => {
            it('should return false when the input is string.', () => {
                expect(arrHelperUtil.isObject('string')).toBe(false);
            });

            it('should return true when the input is an object.', () => {
                expect(arrHelperUtil.isObject({name: 'firstName'})).toBe(true);
            });

            it('should return true when the input is Object string.', () => {
                expect(arrHelperUtil.isObject(new String('literal'))).toBe(true);
            });

            it('should return false when the input is null', () => {
                expect(arrHelperUtil.isObject(null)).toBe(false);
            });

            it('should return false when the input is undefined', () => {
                expect(arrHelperUtil.isObject()).toBe(false);
            });
        });

        describe('parseObject:', () => {
            it('should contain forward slash in the modified object property.', () => {
                //Arrange
                let obj= {
                    fName: 'Jo--hn',
                    lName: '-smith'
                };

                //Act
                obj = arrHelperUtil.parseObject(obj);

                //Assert
                expect(obj.fName).toEqual('Jo//hn');
                expect(obj.lName).toContain('/');
            });
        });

        describe('arrayHelper:', () => {
            it('should contain forward slash in the modified object property in the returned array.', () => {
                //Arrange
                let objArr = [{
                        fName: 'Jo--hn',
                        lName: 'smith'
                    },
                    {
                        fName: 'Lauren',
                        lName: '-smith'
                    },
                ];

                //Act
                let newObj = arrHelperUtil.arrayHelper(objArr);

                //Assert
                expect(newObj[0].fName).toEqual('Jo//hn');
                expect(newObj[1].lName).toContain('/');
            });

            it('should transform an array consisting of primitive arrays.', () => {
                let objArr = [
                    {},
                    ['on-e', 't/wo', '--three']
                ];

                let newObj = arrHelperUtil.arrayHelper(objArr);

                expect(newObj[1][0]).toEqual('on/e');
                expect(newObj[1][1]).toBe('t/wo');
            });

            it('should retain null, undefined, primitive values in the array as is.', () => {
                let objArr = [
                    null,
                    undefined,
                    'primitive-string',
                    23,
                    false
                ];

                let newObj = arrHelperUtil.arrayHelper(objArr);

                expect(newObj[0]).toBeNull;
                expect(newObj[1]).toBeUndefined;
                expect(newObj[4]).toBeFalsy;
            });

            it('should transform nested array of objects.', () => {
                let objArr = [
                    {
                        fName: 'firs-t',
                        lName: '//las-t',
                        child: {
                            fName: 'chil--dfirst',
                            lName: 'c-hild-last',
                            nickName: 'du-de'
                        }

                    },
                    ['on-e', 't/wo', '--three']
                ];

                let newObj = arrHelperUtil.arrayHelper(objArr);

                expect(newObj[0].lName).toEqual('//las/t');
                expect(newObj[0].child.nickName).toBe('du/de');
            });
        });
    });
})();