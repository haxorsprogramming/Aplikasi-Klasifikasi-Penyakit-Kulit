//ROUTE 
var routeToGetDataPenyakit = 'http://api.haxors.or.id/rini/getDaftarPenyakit.php';
// VUE OBJECT 
var divDaftarPenyakit = new Vue({
    el : '#divDaftarPenyakit',
    data : {
        listPenyakit : []
    },
    methods : {

    }
});
//INISIALISASI
$.post(routeToGetDataPenyakit, function(data){
    let obj = JSON.parse(data);
    obj.forEach(renderCluster);
    function renderCluster(item, index){
        divDaftarPenyakit.listPenyakit.push({
            kdCluster : obj[index].kdCluster, nama : obj[index].nama, ciri : obj[index].ciri
        });
    }
});