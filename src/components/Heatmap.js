import React from "react";
import { Group } from "@visx/group";
import genBins from "@visx/mock-data/lib/generators/genBins";
import { scaleLinear } from "@visx/scale";
import { HeatmapCircle, HeatmapRect } from "@visx/heatmap";

// https://dev.to/aumayeung/getting-started-with-react-development-with-the-react-suite-library-modal-34l2

const hot1 = "#77312f";
const hot2 = "#f33d15";
const cool1 = "#122549";
const cool2 = "#b4fbde";
const background = "#28272c";

const binData = genBins(/* length = */ 16, /* height = */ 16);

function max(data, value) {
    return Math.max(...data.map(value));
}

function min(data, value) {
    return Math.min(...data.map(value));
}
const bins = (d) => d.bins;
const count = (d) => d.count;

const colorMax = max(binData, (d) => max(bins(d), count));
const bucketSizeMax = max(binData, (d) => bins(d).length);

// scales
const xScale = scaleLinear({
    domain: [0, binData.length]
});
const yScale = scaleLinear({
    domain: [0, bucketSizeMax]
});
const circleColorScale = scaleLinear({
    range: [hot1, hot2],
    domain: [0, colorMax]
});
const rectColorScale = scaleLinear({
    range: [cool1, cool2],
    domain: [0, colorMax]
});
const opacityScale = scaleLinear({
    range: [0.1, 1],
    domain: [0, colorMax]
});
const defaultMargin = { top: 10, left: 20, right: 20, bottom: 110 };

const Example = ({
    width,
    height,
    events = false,
    margin = defaultMargin,
    separation = 20
}) => {
    const size =
        width > margin.left + margin.right
            ? width - margin.left - margin.right - separation
            : width;
    const xMax = size / 2;
    const yMax = height - margin.bottom - margin.top;
    const binWidth = xMax / binData.length;
    const binHeight = yMax / bucketSizeMax;
    const radius = min([binWidth, binHeight], (d) => d) / 2;

    xScale.range([0, xMax]);
    yScale.range([yMax, 0]);

    return width < 10 ? null : (
        <svg width={width} height={height}>
            <rect
                x={0}
                y={0}
                width={width}
                height={height}
                rx={14}
                fill={background}
            />
            <Group top={margin.top} left={margin.left}>
                <HeatmapCircle
                    data={binData}
                    xScale={(d) => xScale(d) ?? 0}
                    yScale={(d) => yScale(d) ?? 0}
                    colorScale={circleColorScale}
                    opacityScale={opacityScale}
                    radius={radius}
                    gap={2}
                >
                    {(heatmap) =>
                        heatmap.map((heatmapBins) =>
                            heatmapBins.map((bin) => (
                                <circle
                                    key={`heatmap-circle-${bin.row}-${bin.column}`}
                                    className="visx-heatmap-circle"
                                    cx={bin.cx}
                                    cy={bin.cy}
                                    r={bin.r}
                                    fill={bin.color}
                                    fillOpacity={bin.opacity}
                                    onClick={() => {
                                        if (!events) return;
                                        const { row, column } = bin;
                                        alert(JSON.stringify({ row, column, bin: bin.bin }));
                                    }}
                                />
                            ))
                        )
                    }
                </HeatmapCircle>
            </Group>
            <Group top={margin.top} left={xMax + margin.left + separation}>
                <HeatmapRect
                    data={binData}
                    xScale={(d) => xScale(d) ?? 0}
                    yScale={(d) => yScale(d) ?? 0}
                    colorScale={rectColorScale}
                    opacityScale={opacityScale}
                    binWidth={binWidth}
                    binHeight={binWidth}
                    gap={2}
                >
                    {(heatmap) =>
                        heatmap.map((heatmapBins) =>
                            heatmapBins.map((bin) => (
                                <rect
                                    key={`heatmap-rect-${bin.row}-${bin.column}`}
                                    className="visx-heatmap-rect"
                                    width={bin.width}
                                    height={bin.height}
                                    x={bin.x}
                                    y={bin.y}
                                    fill={bin.color}
                                    fillOpacity={bin.opacity}
                                    onClick={() => {
                                        if (!events) return;
                                        const { row, column } = bin;
                                        alert(JSON.stringify({ row, column, bin: bin.bin }));
                                    }}
                                />
                            ))
                        )
                    }
                </HeatmapRect>
            </Group>
        </svg>
    );
};

export default function App() {
    return (
        <div className="App">
            <Example width={500} height={300} />
        </div>
    );
}