import React from 'react';

import { scaleLinear, scaleBand } from 'd3-scale';
import XYAxis from './axis/xy-axis';
import Line from './line/line';
import { line, curveMonotoneX } from 'd3-shape';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';

const LineChart =(props)=>{

    const margins = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,};

    const data = props.data;
    const width = props.width - margins.left - margins.right;
    const height = props.height - margins.top - margins.bottom;

    const ticks = 5;
    const t = transition().duration(1000);

    const xScale = scaleBand()
        .domain(data.map(d => d.name))
        .rangeRound([0, width]).padding(0.1);

    const yScale = scaleLinear()
        .domain(extent(data, d => d.value))
        .range([height, 0])
        .nice();

const lineGenerator = line()
  .x(d => xScale(d.name))
  .y(d => yScale(d.value))
  .curve(curveMonotoneX);

return(
    <svg className="lineChartSvg" width={width + margins.left + margins.right} height={height + margins.top + margins.bottom}>
        <g transform={`translate(${margins.left}, ${margins.top})`}>    
            <XYAxis {...{ xScale, yScale, height, ticks, t }} />
            <Line data={props.data} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />
        </g>
    </svg>
)
}

export default LineChart