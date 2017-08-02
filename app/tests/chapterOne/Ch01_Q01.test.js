var expect = require('expect');

describe('Chapter 1: Arrays and Strings', () => {

  describe('1.1 Is Unique', () => {
    var {Ch01_Q01} = require('Ch01_Q01');

    it('answer should exist', () => {
      expect(Ch01_Q01).toExist();
    });

    it('should return TRUE if a string contains all unique characters', () => {
      const uniqueString = 'abc'
      expect(Ch01_Q01.submit(uniqueString)).toBe(true);
    });

    it('should return FALSE if a string contains all unique characters', () => {
      const nonUniqueString = 'aaaa'
      expect(Ch01_Q01.submit(nonUniqueString)).toBe(false);
    });
  });

});
