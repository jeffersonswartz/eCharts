(function() {
    // ECharts.prototype.setNode = function(propName, propValue) {
    //     var option = this.getOption();
    //     debugger;
        
    // }
    $(document).ready(function() {
        echartsInstance = new Echart(document.getElementById('chartContainer'));

        var option = {
            title: {
                text: 'ECharts entry example'
            },
            tooltip: {},

            xAxis: {
                data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
            },
            yAxis: {},
            series: [{
                name: 'Sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        echartsInstance.setOption(option);

        $(window).on('resize', function(){
            if(echartsInstance != null && echartsInstance != undefined){
                echartsInstance.resize();
            }
        });

    });  
}());