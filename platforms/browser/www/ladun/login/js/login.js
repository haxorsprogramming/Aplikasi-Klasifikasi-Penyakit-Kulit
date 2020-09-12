// ROUTE 
const routeToLogin = "http://api.haxors.or.id/rini/test.php";

// VUE OBJECT
var divUtama = new Vue({
  el: "#divUtama",
  data: {
    pengembang: "Rini Fadillah",
    dataInstansi : [{
      programStudi : 'Ilmu Komputer', fakultas : 'Sains dan Teknologi', universitas : 'Universitas Islam Negeri Sumatera Utara'
    }]
  },
  methods: {
    masukAtc: function () {
      let username = document.querySelector("#txtUsername").value;
      let password = document.querySelector("#txtPassword").value;
      if (username === "" || password === "") {
        isiField();
      } else {
        prosesLogin(username, password);
      }
    },
  },
});

// INISIALISASI 


// FUNCTION 
function loginSistem() {
  fakeLogin();
}

function fakeLogin() {
  Swal.fire({
    title: "Error server!",
    text: "Server tidak bisa diakses..",
    icon: "error",
    confirmButtonText: "Kembali",
  });
}

function isiField() {
  Swal.fire({
    title: "Isi Field!!",
    text: "Harap isi username & password ..",
    icon: "warning",
    confirmButtonText: "Kembali",
  });
}

function prosesLogin(username, password){
  let dataSend = {username: username, password: password }
  $.post(routeToLogin, dataSend, function(data){
      let obj = JSON.parse(data);
      let status = obj.status;
      if(status === "sukses"){
        window.location.assign("mainApp/main.html");
      }
    });
}
