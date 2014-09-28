$(document).ready(function(){
    //connect to the socket server.
    var numbers_received = [];
    //receive details from server
    var name = [];
    var data = [];
    dataArrayFinal = [];

    var names = ['C++ (.cpp)', 'Python', 'HTML', 'C++ (.h)', 'Ruby', 'Perl', 'Scala', 'Java', 'CSS', 'Go', 'Javascript'];
    var number = [88, 541, 200, 595, 1, 8, 0, 41, 79, 5, 809];
    
    for (var j = 0; j < number.length; j++){
        data.push(number[j]);
    }

    for (var m = 0; m < names.length; m++){
        name.push(names[m]);
    }

    for(var j = 0; j < name.length; j++) { 
        var temp = new Array(name[j], data[j]); 
           dataArrayFinal[j] = temp;     
    }

    //maintain a list of ten numbers
    if (numbers_received.length >= 10){
        numbers_received.shift()
    }

    $('#log').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotShadow: false,
            backgroundColor:'rgba(255, 255, 255, 0)'
        },
        title: {
            text: "" // Imported from config.js
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.2f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Code Construct',
            data: dataArrayFinal
        }]
    });
});