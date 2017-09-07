export let Ch01_Q02 = {
  submit(strOne, strTwo) {
    if(strOne.length != strTwo.length) {
      return false;
    };

    return this.sort(strOne) === this.sort(strTwo);
  },
  sort(string) {
    return string.split('').sort().join('');
  }
};
