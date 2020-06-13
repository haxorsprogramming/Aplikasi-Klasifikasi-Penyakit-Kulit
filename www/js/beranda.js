$(document).ready(function () {
  $(".materialboxed").materialbox();
  $(".button-collapse").sideNav();
  $("select").material_select();
  var loading = "<div class='progress'><div class='indeterminate'></div></div>";
  console.log("Halaman berhasil di load");
  $("#divUtama").html(loading);
  $("#divUtama").load("utama.html");
  $("#judulApps").html("Aplikasi Klasifikasi Penyakit Kulit");
  //tombol beranda
  $("#homeSideNav").click(function () {
    location.reload();
  });

  $("#btnKlinik").click(function () {
    $("#divUtama").html(loading);
    $("#divUtama").load("klinik.html");
    $("#judulApps").html("Data Klinik");
    $(".button-collapse").sideNav("hide");
  });

  $('#btnDaftarPenyakit').click(function(){
    updateSistem();
  });

  function updateSistem() {
    Materialize.toast("Tak ada respon dari server", 1100);
  }
});

var divApps = new Vue({
  el : '#divApps',
  data : {
    developer : 'Rini Fadillah',
  }
});
