$(document).ready(function(){
  document.getElementById('txtUsername').focus();
});

var divUtama = new Vue({
  el : '#divUtama',
  data : {
    pengembang : 'Rini Fadillah'
  }, methods: {
    masukAtc : function(){
      loginSistem();
    }
  }
});

function loginSistem()
{
  fakeLogin()
}

function fakeLogin()
{
  Swal.fire({
    title: 'Error server!',
    text: 'Server tidak bisa diakses..',
    icon: 'error',
    confirmButtonText: 'Kembali'
  })
}