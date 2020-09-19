
$(document).ready(function(){


    var capNotif = $('#capNotifLogin');
    capNotif.hide();
    $('#txtUsername').focus();

    $('#btnMasuk').click(function(){
        let username = $('#txtUsername').val();
        let password = $('#txtPassword').val();
        
        if(username === ''){
          window.alert("Isi username!!");
          $('#txtUsername').focus();
        }else if(password === ''){
          window.alert("Isi password!!");
           $('#txtPassword').focus();
        }else{
          capNotif.show();
          $('#capNotifLogin').html("Login ...");
          $.post('prosesLogin.php',{'username':username,'password':password},function(data){
            var obj = JSON.parse(data);
            if(obj.status === 1){
              window.alert("Login berhasil");
              window.location.assign('mainApp/');
            }else{
              window.alert("Username / Password salah!!");
               $('#txtUsername').val("");
               $('#txtPassword').val("");
               $('#txtUsername').focus();
            }
          });
        }
        
    });

    function tutupCapNotif(){
        capNotif.hide();
    }

});
