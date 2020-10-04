//ROUTE 
var routeToGetDataPenyakit = 'https://api.haxors.or.id/rini/get_data_cluster.php';

// VUE OBJECT 
var divDaftarPenyakit = new Vue({
    el : '#divDaftarPenyakit',
    data : {
        listPenyakit : []
    },
    methods : {
        kembaliAtc : function()
        {
            
        }
    }
});

//INISIALISASI
$.post(routeToGetDataPenyakit, function(data){
    let obj = JSON.parse(data);
    obj.forEach(renderCluster);
    function renderCluster(item, index){
        divDaftarPenyakit.listPenyakit.push({
            kdCluster : obj[index].kdCluster, nama : obj[index].nama, ciri : obj[index].deks
        });
    }
});