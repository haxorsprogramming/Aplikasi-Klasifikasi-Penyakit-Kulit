$(document).ready(function(){
  document.getElementById('txtUsername').focus();
});

var divUtama = new Vue({
  el : '#divUtama',
  data : {
    pengembang : 'Rini Fadillah'
  }, methods: {
    masukAtc : function(){
      let username = document.getElementById('txtUsername').value; 
      let password = document.getElementById('txtPassword').value;
      if(username === '' || password === ''){
        isiField();
      }else{
        prosesLogin(username, password);
      }
      // loginSistem();
    }
  }
});

function loginSistem()
{
  fakeLogin();
}

function fakeLogin()
{
  Swal.fire({
    title: 'Error server!',
    text: 'Server tidak bisa diakses..',
    icon: 'error',
    confirmButtonText: 'Kembali'
  });
}

function isiField()
{
  Swal.fire({
    title: 'Isi Field!!',
    text: 'Harap isi username & password ..',
    icon: 'warning',
    confirmButtonText: 'Kembali'
  });
}

function prosesLogin(username, password)
{
  $.post('http://api.haxors.or.id/rini/test.php',{'username':username, 'password':password}, function(data){
    let obj = JSON.parse(data);
    console.log(obj);
  });
}