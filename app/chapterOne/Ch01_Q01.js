//     FIRST ATTEMPT
// --------------------

// export let Ch01_Q01 = {
//   submit (string) {
//     var char_tracker = {};
//
//     for (let char of string.split('')) {
//       char_tracker[char] >= 0 ? char_tracker[char]++ : char_tracker[char] = 0;
//
//       if (char_tracker[char] > 1) {
//         return false;
//       };
//
//     };
//     return true;
//   }
// };

//    Second Attempt
// --------------------

export let Ch01_Q01 = {
  submit (string) {
    var char_tracker = {};

    for (let char of string.split('')) {
      if (char_tracker[char]) {
        return false
      } else {
        char_tracker[char] = true;
      };

    };
    return true;
  }
};
