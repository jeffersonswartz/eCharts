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
            }, {
                name: 'Profit',
                type: 'bar',
                data: [125, 203, 316, 120, 110, 250]
            }]
        };

        var pieOption = {        
            title: {
                text: 'Customized Pie',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },
        
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
        
            visualMap: {
                show: true,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series : [
                {
                    name:'Pie Chart',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    data:[
                        {value:335, name:'A'},
                        {value:310, name:'B'},
                        {value:274, name:'C'},
                        {value:235, name:'D'},
                        {value:400, name:'E'}
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
        
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        };

        switchData = function(flag) {
            flag ? echartsInstance.setOption(pieOption, true) : echartsInstance.setOption(option, true);
        }

        echartsInstance.setOption(option);
        echartsInstance.addEvent('mouseover', function(e) {
            console.log(e);
        }, false, {seriesName: 'Profit'});
        console.log(echartsInstance.getNode('series'));
    });  
}());