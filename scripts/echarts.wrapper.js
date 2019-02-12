function Echart(dom, option) {
    var self = this;
    self.chartInstance = {};
    self.chartInstance = chart = echarts.init(dom, option);
    chart.getNode = function (node) {
        return (node ? chart.getOption()[node] instanceof Array && node.toLowerCase() != 'series'? chart.getOption()[node][0] : chart.getOption()[node] : chart.getOption());
    }.bind(this);
    chart.setNode = function (node, option) {
        var options = chart.getOption();
        options[node] = option;
        chart.setOption(options, true);
    };

    chart.destroy = function() {
        chart.dispose();
    };

    chart.addEvent = function(event, handler, removeOld, query) {
        if (removeOld) {
            chart.off(event);
        } 
        chart.on(event, query, function (e) {
            handler(e);
        });
    };

    window.addEventListener('resize', function(){
        chart.resize();
    }, true);
    return chart;
}