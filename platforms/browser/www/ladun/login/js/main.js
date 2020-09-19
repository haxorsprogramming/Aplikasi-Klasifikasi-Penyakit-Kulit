$(document).ready(function(){

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('#divUtama').html("Memuat ..");
    $('#divUtama').load('beranda.php');

    $('#btnDashboard').click(function(){
        $('#divUtama').html("Memuat ..");
        $('#divUtama').load('beranda.php');
    });

    $('#btnDevice').click(function(){
      $('#divUtama').html("Memuat ..");
      $('#divUtama').load('device.php');
    });

});
