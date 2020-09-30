// ROUTE 
var rGetNormalisasi = "http://api.haxors.or.id/rini/get_normalisasi.php";
var rHitungNaiveBayes = "";

// INISIALISASI 
$('#divHasilAnalisa').hide();
$('.materialboxed').materialbox();

// VUE OBJECT 
var divHasilAnalisa = new Vue({
    el : '#divHasilAnalisa',
    data : {
        red : 0,
        green : 0,
        blue : 0,
        brightness : 0,
        normalisasiCitra : [{red : 0, green : 0, blue : 0, brightness : 0}]
    },
    methods : {
        hitungAtc : function()
        {
            hitungNaiveBayes();
        }
    }
});

// FUNCTION 
function getImg(){
    var sampul = document.querySelector('#txtFoto');
    var imgPrev = document.querySelector('.imgPrev');
    var fileGambar = new FileReader();
    fileGambar.readAsDataURL(sampul.files[0]);
    
    fileGambar.onload = function(e){
        let hasil = e.target.result;
        imgPrev.src = hasil;

        resemble(hasil).onComplete(function(data){
            
            let red = data.red;
            let green = data.green;
            let blue = data.blue;
            let brightness = data.brightness;
            
            var arrNilai = ['red', 'green', 'blue', 'brightness'];

            divHasilAnalisa.red = red;
            divHasilAnalisa.green = green;
            divHasilAnalisa.blue = blue;
            divHasilAnalisa.brightness = brightness;

            $('#divHasilAnalisa').show();

        });

    }

}

function hitungNaiveBayes()
{
    let statusKoneksi = navigator.onLine;
    if(statusKoneksi === true){
        let konfirm = window.confirm("Mulai perhitungan bayes?");
        if(konfirm === true){
            $('#btnHitung').addClass('disabled');
            let red = divHasilAnalisa.red;
            let green = divHasilAnalisa.green;
            let blue = divHasilAnalisa.blue;
            let brightness = divHasilAnalisa.brightness;
            let dataSend = {'a1':red, 'a2':green, 'a3':blue, 'a4':brightness}

            $.post(rGetNormalisasi, dataSend, function(data){
                let obj = JSON.parse(data);
                console.log(obj);
            });
            console.log(red);
            // setTimeout(function(){
            //     Materialize.toast("Tak ada respon dari server", 1100);
            // }, 2000);
        }else{

        }
    }else{
        window.alert("Tidak terhubung ke server, pastikan smartphone terhubung ke internet!!!");
    }
    
}