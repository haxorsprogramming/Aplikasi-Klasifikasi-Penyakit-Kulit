// ROUTE 
var rDaftar = 'https://api.haxors.or.id/rini/create_user.php';

// VUE OBJECT 
var divUtama = new Vue({
    el : '#divUtama',
    data : {
        pengembang : 'Rini Fadillah'
    },
    methods : {
        daftarAtc : function()
        {
            prosesDaftar();
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
function prosesDaftar()
{
    let username = document.querySelector('#txtUsername').value;
    let password = document.querySelector('#txtPassword').value;
    let dataSend = {'username':username, 'password':password}

    if(username === '' || password === ''){
        pesanUmumApp('warning', 'Isi field!!', 'Harap isi username & password');
    }else{
        $.post(rDaftar, dataSend, function(data){
            let obj = JSON.parse(data);
            if(obj.status === 'sukses'){
                pesanUmumApp('success', 'Pendaftaran sukses', 'Pendaftaran user berhasil, akan dialihkan ke halaman login dalam 2 detik');
                setTimeout(function(){
                    window.location.assign('index.html');
                }, 2000);
            }else{
                pesanUmumApp('error', 'Pendaftaran gagal', 'Pendaftaran gagal, username sudah digunakan... periksa kembali');
                document.querySelector('#txtPassword').value = '';
                document.querySelector('#txtUsername').focus();
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