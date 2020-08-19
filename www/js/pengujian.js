//route 
var rGetSampel = 'http://api.haxors.or.id/rini/getNormalisasiSampel.php';
//inisialisasi 
$('#divHasilAnalisa').hide();
$('.materialboxed').materialbox();

var divHasilAnalisa = new Vue({
    el : '#divHasilAnalisa',
    data : {
        alpha : '',
        black : '',
        blue : '',
        brightness : '',
        green : '',
        red : '',
        white : '',
        normalisasiCitra : [{alpha : 0, black : 0, blue : 0, brightness : 0, green : 0, red : 0, white : 0}]
    },
    methods : {
        hitungAtc : function()
        {
            console.log("Tes");
        }
    }
});

function getImg(){
    var sampul = document.querySelector('#txtFoto');
    var imgPrev = document.querySelector('.imgPrev');
    var fileGambar = new FileReader();
    fileGambar.readAsDataURL(sampul.files[0]);
    
    fileGambar.onload = function(e){
        let hasil = e.target.result;
        imgPrev.src = hasil;

        resemble(hasil).onComplete(function(data){
            let alpha = data.alpha;
            let black = data.black;
            let blue = data.blue;
            let brightness = data.brightness;
            let green = data.green;
            let red = data.red;
            let white = data.white;
            var arrNilai = ['alpha', 'black', 'blue', 'brightness', 'green', 'red', 'white'];

            let total = parseInt(alpha) + parseInt(black) + parseInt(blue) + parseInt(brightness) + parseInt(green) + parseInt(red) + parseInt(white);
            console.log(data);
            //normalisasi alpha
            $.post(rGetSampel, {'tipe':arrNilai[0]}, function(data){
                let obj = JSON.parse(data);
                if(parseInt(obj.nilai) === 0){
                    divHasilAnalisa.normalisasiCitra[0].alpha = 0;
                }else{
                    let fin = parseInt(alpha) / parseInt(obj.nilai);
                    divHasilAnalisa.normalisasiCitra[0].alpha = fin;
                }
            });
              //normalisasi black
              $.post(rGetSampel, {'tipe':arrNilai[1]}, function(data){
                let obj = JSON.parse(data);
                if(parseInt(obj.nilai) === 0){
                    divHasilAnalisa.normalisasiCitra[0].black = 0;
                }else{
                    let fin = parseInt(black) / parseInt(obj.nilai);
                    divHasilAnalisa.normalisasiCitra[0].black = fin;
                }
            });
              //normalisasi blue
              $.post(rGetSampel, {'tipe':arrNilai[2]}, function(data){
                let obj = JSON.parse(data);
                if(parseInt(obj.nilai) === 0){
                    divHasilAnalisa.normalisasiCitra[0].blue = 0;
                }else{
                    let fin = parseInt(blue) / parseInt(obj.nilai);
                    divHasilAnalisa.normalisasiCitra[0].blue = fin;
                }
            });
              //normalisasi brightness
              $.post(rGetSampel, {'tipe':arrNilai[3]}, function(data){
                let obj = JSON.parse(data);
                if(parseInt(obj.nilai) === 0){
                    divHasilAnalisa.normalisasiCitra[0].brightness = 0;
                }else{
                    let fin = parseInt(brightness) / parseInt(obj.nilai);
                    divHasilAnalisa.normalisasiCitra[0].brightness = fin;
                }
            });
              //normalisasi green
              $.post(rGetSampel, {'tipe':arrNilai[4]}, function(data){
                let obj = JSON.parse(data);
                if(parseInt(obj.nilai) === 0){
                    divHasilAnalisa.normalisasiCitra[0].green = 0;
                }else{
                    let fin = parseInt(green) / parseInt(obj.nilai);
                    divHasilAnalisa.normalisasiCitra[0].green = fin;
                }
            });
              //normalisasi red
              $.post(rGetSampel, {'tipe':arrNilai[5]}, function(data){
                let obj = JSON.parse(data);
                if(parseInt(obj.nilai) === 0){
                    divHasilAnalisa.normalisasiCitra[0].red = 0;
                }else{
                    let fin = parseInt(red) / parseInt(obj.nilai);
                    divHasilAnalisa.normalisasiCitra[0].red = fin;
                }
            });
              //normalisasi white
              $.post(rGetSampel, {'tipe':arrNilai[6]}, function(data){
                let obj = JSON.parse(data);
                if(parseInt(obj.nilai) === 0){
                    divHasilAnalisa.normalisasiCitra[0].white = 0;
                }else{
                    let fin = parseInt(white) / parseInt(obj.nilai);
                    divHasilAnalisa.normalisasiCitra[0].white = fin;
                }
            });

            divHasilAnalisa.alpha = alpha;
            divHasilAnalisa.black = black;
            divHasilAnalisa.blue = blue;
            divHasilAnalisa.brightness = brightness;
            divHasilAnalisa.green = green;
            divHasilAnalisa.red = red;
            divHasilAnalisa.white = white;

            $('#divHasilAnalisa').show();

        });

    }

}
