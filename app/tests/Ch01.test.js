var expect = require('expect');

describe('Chapter 1: Arrays and Strings', () => {

  describe('1.1 Is Unique', () => {
    var {Ch01_Q01} = require('Ch01_Q01');

    it('answer should exist', () => {
      expect(Ch01_Q01).toExist();
    });

    it('should return TRUE if a string contains all unique characters', () => {
      const uniqueString = 'abc';
      expect(Ch01_Q01.submit(uniqueString)).toBe(true);
    });

    it('should return FALSE if a string contains all unique characters', () => {
      const nonUniqueString = 'aaaa';
      expect(Ch01_Q01.submit(nonUniqueString)).toBe(false);
    });
  });

  describe('1.2 Check Permutation', () => {
    var {Ch01_Q02} = require('Ch01_Q02');

    it('answer to exist', () => {
      expect(Ch01_Q02).toExist();
    });

    it('should return TRUE if a string is a Permutation', () => {
      expect(Ch01_Q02.submit('dog', 'god')).toBe(true);
    });

    it('should return FALSE if a string is not a Permutation', () => {
      const base = 'lamar';
      const closeMatch = 'raqal';
      expect(Ch01_Q02.submit(base, closeMatch)).toBe(false);

      const wrongCase = 'ramaL';
      expect(Ch01_Q02.submit(base, wrongCase)).toBe(false);
    });
  });

});
