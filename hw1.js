/*
 * Homework 1
 * JavaScript skeleton code
 *
 * Author: Bozhao Lan
 * Version: 1.0
 */

"use strict";


function updateLinePlot(chart, county) {
  let svg = chart.select("svg");
  svg.select("*").remove();

  const
    width = 1920,
    height = 1080,
    xAxesLength = 1600,
    yAxesLength = 900,
    radius = 10,
    xOffset = (width - xAxesLength) / 2,
    yOffset = (height - yAxesLength) / 2,
    xMin = 0,
    yMin = 0,
    xMax = 40,
    yMax = 120;

  var xAxes = d3
    .scaleLinear()
    .domain([xMin, xMax])
    .range([0, xAxesLength]);

  svg
    .append('g')
    .attr("transform", "translate(" + xOffset + "," + (height - yOffset) + ")")
    .style("font-size", "x-large")
    .call(d3.axisBottom(xAxes));

  var yAxes = d3
    .scaleLinear()
    .domain([yMin, yMax])
    .range([yAxesLength, 0]);

  svg
    .append('g')
    .attr("transform", "translate(" + xOffset + "," + yOffset + ")")
    .style("font-size", "x-large")
    .call(d3.axisLeft(yAxes));

  d3.csv(cvsURL)
    .then((data) => {
      data.forEach(function(d) {
        if (county.id == ("id" + d.id)) {
          const data = [{
              x: 0,
              y: parseFloat(d.v2009q4)
            },
            {
              x: 1,
              y: parseFloat(d.v2010q1)
            },
            {
              x: 2,
              y: parseFloat(d.v2010q2)
            },
            {
              x: 3,
              y: parseFloat(d.v2010q3)
            },
            {
              x: 4,
              y: parseFloat(d.v2010q4)
            },
            {
              x: 5,
              y: parseFloat(d.v2011q1)
            },
            {
              x: 6,
              y: parseFloat(d.v2011q2)
            },
            {
              x: 7,
              y: parseFloat(d.v2011q3)
            },
            {
              x: 8,
              y: parseFloat(d.v2011q4)
            },
            {
              x: 9,
              y: parseFloat(d.v2012q1)
            },
            {
              x: 10,
              y: parseFloat(d.v2012q2)
            },
            {
              x: 11,
              y: parseFloat(d.v2012q3)
            },
            {
              x: 12,
              y: parseFloat(d.v2012q4)
            },
            {
              x: 13,
              y: parseFloat(d.v2013q1)
            },
            {
              x: 14,
              y: parseFloat(d.v2013q2)
            },
            {
              x: 15,
              y: parseFloat(d.v2013q3)
            },
            {
              x: 16,
              y: parseFloat(d.v2013q4)
            },
            {
              x: 17,
              y: parseFloat(d.v2014q1)
            },
            {
              x: 18,
              y: parseFloat(d.v2014q2)
            },
            {
              x: 19,
              y: parseFloat(d.v2014q3)
            },
            {
              x: 20,
              y: parseFloat(d.v2014q4)
            },
            {
              x: 21,
              y: parseFloat(d.v2015q1)
            },
            {
              x: 22,
              y: parseFloat(d.v2015q2)
            },
            {
              x: 23,
              y: parseFloat(d.v2015q3)
            },
            {
              x: 24,
              y: parseFloat(d.v2015q4)
            },
            {
              x: 25,
              y: parseFloat(d.v2016q1)
            },
            {
              x: 26,
              y: parseFloat(d.v2016q2)
            },
            {
              x: 27,
              y: parseFloat(d.v2016q3)
            },
            {
              x: 28,
              y: parseFloat(d.v2016q4)
            },
            {
              x: 29,
              y: parseFloat(d.v2017q1)
            },
            {
              x: 30,
              y: parseFloat(d.v2017q2)
            },
            {
              x: 31,
              y: parseFloat(d.v2017q3)
            },
            {
              x: 32,
              y: parseFloat(d.v2017q4)
            },
            {
              x: 33,
              y: parseFloat(d.v2018q1)
            },
            {
              x: 34,
              y: parseFloat(d.v2018q2)
            },
            {
              x: 35,
              y: parseFloat(d.v2018q3)
            },
            {
              x: 36,
              y: parseFloat(d.v2018q4)
            },
            {
              x: 37,
              y: parseFloat(d.v2019q1)
            },
            {
              x: 38,
              y: parseFloat(d.v2019q2)
            },
            {
              x: 39,
              y: parseFloat(d.v2019q3)
            }
          ];

          chart.select("svg");
          svg.selectAll("circle").remove();

          svg
            .selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function(d) {
              return xAxes(d.x) + xOffset;
            })
            .attr("cy", function(d) {
              return yAxes(d.y) + yOffset;
            })
            .attr("r", radius);

            chart.select("svg");
            svg.selectAll(".line-path").remove();

            const lineGenerator = d3.line()
            .x(function(d) {
              return xAxes(d.x) + xOffset;
            })
            .y(function(d) {
              return yAxes(d.y) + yOffset;
            });


            chart.select("svg")
              .append("path")
              .attr("class", "line-path")
              .attr("d", lineGenerator(data));
        }
      });
    });

  chart.select("svg");
  svg.select(".chartTitle").remove();

  chart.select("svg")
    .append("text")
    .attr("class", "chartTitle")
    .attr("x", width / 2)
    .attr("y", 40)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .attr("font-size", "40")
    .attr("font-weight", "bold")
    .text(county.getAttribute("name"));

}

function createLinePlot(chart) {
  const width = 1920,
    height = 1080,
    xAxesLength = 1600,
    yAxesLength = 900;

  chart.append("div")
    .classed("caption", true);

  const svg = chart
    .append("svg")
    .attr("id", "mapTooltipSVG")
    .attr("width", "500")
    .attr("height", "300")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 " + width + " " + height);
}

function createSlider(element) {
  let sliderRange = element
    .append("div")
    .attr("id", "slider-range");

  let gRange = sliderRange
    .append("svg")
    .attr("width", 600)
    .attr("height", 100)
    .append("g")
    .attr("transform", "translate(30,30)");

  var svgDefs = sliderRange.select("svg").append("defs");
  var sliderGradient = svgDefs
    .append("linearGradient")
    .attr("id", "sliderGradient");
  sliderGradient.append("stop")
    .attr("class", "stop-left")
    .attr("offset", "0");
  sliderGradient.append("stop")
    .attr("class", "stop-middle")
    .attr("offset", "0.3");
  sliderGradient.append("stop")
    .attr("class", "stop-right")
    .attr("offset", "1");

  let slider = d3
    .sliderBottom()
    .min(0)
    .max(100)
    .width(500)
    .tickFormat(d3.format(".0f"))
    .ticks(10)
    .default([0, 100])
    .on("onchange", val => {
      d3.selectAll("#mapSVG path")
        .filter(function(d) {
          let v = this.getAttribute("value");
          if (v < val[0] || v > val[1]) {
            this.setAttribute("fill", "grey");
          } else {
            this.setAttribute("fill", d3
              .scaleLinear()
              .domain([-1, 0, 30, 100])
              .range(["grey", "green", "yellow", "red"])
              .interpolate(d3.interpolateRgb)(v));
          }

          return this.toString() === (100 + "");
        });

      d3.selectAll("text")
        .style("opcaity", 1.0);
    });

  gRange.call(slider);

  sliderRange.select("svg")
    .select("line.track-inset")
    .attr("y1", "0")
    .attr("y2", "1");
}

const jsonURL = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/VA-51-virginia-counties.json";

const cvsURL = "https://cors-anywhere.herokuapp.com/http://www.cs.vt.edu/~gracanin/course/cs3744/hw1.csv";

const width = 1920,
  height = 1080;

const map = d3
  .select("body")
  .append("div")
  .attr("class", "map");

const svg = map
  .append("svg")
  .attr("id", "mapSVG")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 " + width + " " + height);

svg.append("text")
  .attr("x", width / 2)
  .attr("y", 40)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "40")
  .attr("font-weight", "bold")
  .text("Overall Housing Affordability Index at 60% of Median Household Income");

svg.append("text")
  .attr("x", width / 2)
  .attr("y", 90)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "35")
  .text("by Virginia Counties and independent Cities, 3rd Qtr. 2019");

// svg.append("path")
//   .attr("d", "M 0 0 L 1920 0 L 1920 1080 L 0 1080 z");

const projection = d3
  .geoMercator()
  .scale(11000)
  .translate([0, 0]);

const countyPath = d3
  .geoPath()
  .projection(projection);

const mapTooltip = d3
  .select("body")
  .append("div")
  .classed("mapTooltip", true);

var jsonData = d3
  .json(jsonURL)
  .then((data) => {
    const state = topojson.feature(data, data.objects.cb_2015_virginia_county_20m),
      bounds = countyPath.bounds(state);
    projection.translate([width / 2 - (bounds[0][0] + bounds[1][0]) / 2, height / 2 - (bounds[0][1] + bounds[1][1]) / 2]);
    console.log(state.features);
    svg.selectAll("path")
      .data(state.features)
      .enter().append("path")
      .classed("county", true)
      .attr("id", county => {
        return "id" + county.properties.COUNTYFP;
      })
      .attr("name", county => {
        return county.properties.NAME;
      })
      .attr("fill", "grey")
      .attr("value", -1)
      .attr("d", countyPath)
      .on("mouseover", function(county) {
        updateLinePlot(mapTooltip, this);
        return mapTooltip.style("visibility", "visible");
      })
      .on("mousemove", d => {
        return mapTooltip
          .style("top", (d3.event.pageY + 10) + "px")
          .style("left", (d3.event.pageX + 10) + "px");
      })
      .on("mouseout", d => {
        return mapTooltip.style("visibility", "hidden");
      });

  });

jsonData.then(() => {
  return d3.csv(cvsURL)
    .then((data) => {
      data.forEach((item, ) => {
        svg.select("[id=id" + item.id + "]")
          .attr("value", item.v2019q3)
          .attr("trend", Object.values(item).slice(1))
          .attr("fill", () => {
            return d3.scaleLinear()
              .domain([-1, 0, 30, 100])
              .range(["grey", "green", "yellow", "red"])
              .interpolate(d3.interpolateRgb)(item.v2019q3);
          })
      });
    })


});

createLinePlot(mapTooltip);

createSlider(map);


//   svg.append("path")
//     .datum({
//       "type": "FeatureCollection",
//       features: state.features
//     })
//     .attr("d", countyPath)
//     .on("mouseover", function() {
//
//     })
//     .on("mouseenter", function() {
//       console.log("mouse enter");
//     });
// })
// .catch((error) => {
//   console.error("Error loading the JSON data: " + error);
// });
