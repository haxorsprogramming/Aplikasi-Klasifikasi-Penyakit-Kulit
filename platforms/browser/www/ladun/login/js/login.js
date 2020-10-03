// ROUTE 
var routeToLogin = 'https://api.haxors.or.id/rini/login_proses.php';

// VUE OBJECT 
var divUtama = new Vue({
  el :'#divUtama',
  data : {
    pengembang : 'Rini Fadillah'
  },
  methods : {
    masukAtc : function()
    {
      prosesLogin();
    },
    daftarAtc : function()
    {
      window.location.assign('daftar.html');
    }
  }
});

//INISIALISASI
let statusKoneksi = navigator.onLine;
document.querySelector('#txtUsername').focus();

if(statusKoneksi === true){
  $('#capCekServer').html('Terhubung');
  $('#capCekServer').addClass('badge-info');
}else{
  $('#capCekServer').html('Tidak terkoneksi');
  $('#capCekServer').addClass('badge-warning');
}

//FUNCTION 
function prosesLogin()
{
  let username = document.querySelector('#txtUsername').value;
  let password = document.querySelector('#txtPassword').value;

  if(username === '' || password === ''){
    pesanUmumApp('warning', 'Isi field!!', 'Harap isi username & password');
  }else{
    let dataSend = {'username':username, 'password':password}
    $.post(routeToLogin, dataSend, function(data){
      let obj = JSON.parse(data);
      if(obj.status === 'sukses'){
        window.location.assign('mainApp/main.html');
      }else{
        pesanUmumApp('error', 'Gagal', 'Login gagal, periksa kembali username & password..');
      }
    });
  }

}

function pesanUmumApp(icon, title, text)
{
  Swal.fire({
    icon : icon,
    title : title,
    text : text
  });
}