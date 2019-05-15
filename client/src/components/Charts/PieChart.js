import React, { Component } from 'react'
import * as d3 from 'd3'

export class PieChart extends Component {
    componentDidMount() {
        this.drawChart();
    }
    drawChart() {
        // set the dimensions and margins of the graph
        let width = 450
        let height = 450
        let margin = 40

        // The radius of the pieplot is half the width or half the height (smallest one). I substract a bit of margin.
        var radius = Math.min(width, height) / 2 - margin

        // append the svg object to the div called 'my_dataviz'
        var svg = d3.select("#pie")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        // Populate data from parent
        let data = this.props.data;

        // set the color scale
        var color = d3.scaleOrdinal()
            .domain(data)
            //1st color is pass, 2nd fail
            .range(["#006400", "#8C001A", , "#FFFFFF"])

        // Compute the position of each group on the pie:
        var pie = d3.pie()
            .value(function (d) { return d.value; })
        var data_ready = pie(d3.entries(data))

        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        svg
            .selectAll('whatever')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', d3.arc()
                .innerRadius(0)
                .outerRadius(radius)
            )
            .attr('fill', function (d) { return (color(d.data.key)) })
            .attr("stroke", "black")
            .style("stroke-width", "2px")
            .style("opacity", 0.7)
    }
    render() {
        return (
            <div id="pie"></div>
        )
    }
}

export default PieChart
