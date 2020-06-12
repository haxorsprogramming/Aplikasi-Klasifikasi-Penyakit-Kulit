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

  $("#btnPengujian").click(function () {
    $("#divUtama").html(loading);
    $("#divUtama").load("pengujian.html");
    $("#judulApps").html("Pengujian");
    $(".button-collapse").sideNav("hide");
  });

  function updateSistem() {
    Materialize.toast("Server realtime sedang berjalan", 1100);
  }
});
