function Echart(dom, option) {
    this.chartInstance = {};
    this.chartInstance = echarts.init(dom, option);
    this.chartInstance.getNode = function (node) {
        return node ? this.chartInstance.getOption()[node] : this.chartInstance.getOption();
    }.bind(this);
    this.chartInstance.setNode = function (node, option) {
        var options = this.chartInstance.getOption();
        options[node] = option;
        this.chartInstance.setOption(options);
    }.bind(this);
    return this.chartInstance;
}