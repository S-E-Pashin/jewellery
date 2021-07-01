'use strict';

// $(document).ready(function () {
//   console.log(localStorage.inputLoginEmail);
// });

var inputLoginEmail = '';

$('#login-id-email').keyup(function () {
  inputLoginEmail = $('#login-id-email').val();
  localStorage.setItem('inputLoginEmail', inputLoginEmail);
});
