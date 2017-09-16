// export const Ch01_Q03 = {
//   submit(url, true_length) {
//     let formatted_url = '';
//
//     for(let i = 0; i < true_length; i++) {
//       let char = url[i];
//
//       if(char === ' ') char = '%20';
//
//       formatted_url = formatted_url + char;
//     }
//
//     return formatted_url;
//   }
// };

export const Ch01_Q03 = {
  submit(url, true_length) {
    return url.trim().replace(/ /g, '%20');
  }
};
