const gambar = document.querySelector('#gambar');
const apiProses = "http://api.haxors.or.id/rini/prosesNaiveBayes.php";
const headers = { 'type' : 'Application/Json', 'token' : 'rinifadillah123'}

const bayes = require('bayes');
const classifier = bayes.initialize();

var kriteria = {'A1' : 'Brightness', 'A2' : 'Red', 'A3' : 'Green' : 'A4' : 'Blue'}

var dataLatih = [];

const dataUji = gambar.readDataAsUrl();

var explodeToKriteria = dataUji.split("-");

var hasil = { 'Hasil' : '', probabilitas : 0 }

var finalDataUji = {'A1uji' : explodeToKriteria[0], 'A2uji' : explodeToKriteria[1], 'A3uji' : explodeToKriteria[2], 'A4uji' : explodeToKriteria}

var i = 0;

$.post(apiProses, finalDataUji, function(dataRespon){
    let obj = JSON.parse(dataRespon);
    dataLatih.push('A'.i.'latih' : obj.a[i]);
    await classifier.learn(ob[i].model(finalDataUji[i]));
});

var prediksiPenyakit = classifier.predict();

divHasilAnalisa.penyakitFin = prediksiPenyakit;
$('#btnHitung').hide();



