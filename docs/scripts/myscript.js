// Data: Each row represents a year, followed by the number of discoveries by different methods and total.
const exoplanetData = [
  { disc_year: 1992, Pulsar_Timing: 6, Radial_Velocity: 0, Transit: 0, Imaging: 0, Microlensing: 0, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 6, annotation: "First confirmed exoplanet detection with Pulsar Timing Method." },
  { disc_year: 1994, Pulsar_Timing: 2, Radial_Velocity: 0, Transit: 0, Imaging: 0, Microlensing: 0, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 2, annotation: "" },
  { disc_year: 1995, Pulsar_Timing: 0, Radial_Velocity: 5, Transit: 0, Imaging: 0, Microlensing: 0, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 5, annotation: "Radial_Velocity Method First Sucess" },
  { disc_year: 1996, Pulsar_Timing: 0, Radial_Velocity: 41, Transit: 0, Imaging: 0, Microlensing: 0, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 41, annotation: "" },
  { disc_year: 1997, Pulsar_Timing: 0, Radial_Velocity: 4, Transit: 0, Imaging: 0, Microlensing: 0, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 4, annotation: "" },
  { disc_year: 1998, Pulsar_Timing: 0, Radial_Velocity: 39, Transit: 0, Imaging: 0, Microlensing: 0, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 39, annotation: "" },
  { disc_year: 1999, Pulsar_Timing: 0, Radial_Velocity: 80, Transit: 0, Imaging: 0, Microlensing: 0, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 80, annotation: "" },
  { disc_year: 2000, Pulsar_Timing: 0, Radial_Velocity: 77, Transit: 0, Imaging: 0, Microlensing: 0, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 77, annotation: "" },
  { disc_year: 2001, Pulsar_Timing: 0, Radial_Velocity: 58, Transit: 0, Imaging: 0, Microlensing: 0, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 58, annotation: "" },
  { disc_year: 2002, Pulsar_Timing: 0, Radial_Velocity: 134, Transit: 10, Imaging: 0, Microlensing: 0, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 144, annotation: "" },
  { disc_year: 2003, Pulsar_Timing: 1, Radial_Velocity: 86, Transit: 0, Imaging: 0, Microlensing: 0, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 87, annotation: "" },
  { disc_year: 2004, Pulsar_Timing: 0, Radial_Velocity: 112, Transit: 53, Imaging: 6, Microlensing: 2, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 173, annotation: "" },
  { disc_year: 2005, Pulsar_Timing: 0, Radial_Velocity: 153, Transit: 0, Imaging: 1, Microlensing: 7, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 161, annotation: "" },
  { disc_year: 2006, Pulsar_Timing: 0, Radial_Velocity: 72, Transit: 66, Imaging: 7, Microlensing: 3, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 148, annotation: "" },
  { disc_year: 2007, Pulsar_Timing: 0, Radial_Velocity: 128, Transit: 192, Imaging: 1, Microlensing: 0, Pulsation_Timing_Variations: 1, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 322, annotation: "" },
  { disc_year: 2008, Pulsar_Timing: 0, Radial_Velocity: 112, Transit: 181, Imaging: 28, Microlensing: 9, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 330, annotation: "" },
  { disc_year: 2009, Pulsar_Timing: 0, Radial_Velocity: 191, Transit: 225, Imaging: 0, Microlensing: 5, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 2, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 423, annotation: "" },
  { disc_year: 2010, Pulsar_Timing: 0, Radial_Velocity: 108, Transit: 475, Imaging: 14, Microlensing: 4, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 4, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 605, annotation: "" },
  { disc_year: 2011, Pulsar_Timing: 1, Radial_Velocity: 105, Transit: 912, Imaging: 3, Microlensing: 2, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 7, Orbital_Brightness_Modulation: 2, Transit_Timing_Variations: 3, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 1035, annotation: "" },
  { disc_year: 2012, Pulsar_Timing: 0, Radial_Velocity: 92, Transit: 999, Imaging: 3, Microlensing: 15, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 1, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 2, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 1112, annotation: "" },
  { disc_year: 2013, Pulsar_Timing: 0, Radial_Velocity: 57, Transit: 913, Imaging: 16, Microlensing: 13, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 13, Transit_Timing_Variations: 3, Astrometry: 1, Disk_Kinematics: 0, TotalDiscovered: 1016, annotation: "First earth size planet in habitat." },
  { disc_year: 2014, Pulsar_Timing: 0, Radial_Velocity: 99, Transit: 8802, Imaging: 2, Microlensing: 14, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 3, Transit_Timing_Variations: 108, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 9028, annotation: "" },
  { disc_year: 2015, Pulsar_Timing: 0, Radial_Velocity: 106, Transit: 785, Imaging: 11, Microlensing: 10, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 2, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 914, annotation: "" },
  { disc_year: 2016, Pulsar_Timing: 0, Radial_Velocity: 84, Transit: 12742, Imaging: 2, Microlensing: 49, Pulsation_Timing_Variations: 1, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 1, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 12879, annotation: "Cloest exoplanet discovered." },
  { disc_year: 2017, Pulsar_Timing: 2, Radial_Velocity: 68, Transit: 471, Imaging: 5, Microlensing: 29, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 1, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 1, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 577, annotation: "" },
  { disc_year: 2018, Pulsar_Timing: 0, Radial_Velocity: 68, Transit: 856, Imaging: 5, Microlensing: 56, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 1, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 1, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 987, annotation: "" },
  { disc_year: 2019, Pulsar_Timing: 0, Radial_Velocity: 102, Transit: 380, Imaging: 5, Microlensing: 61, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 2, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 3, Astrometry: 0, Disk_Kinematics: 1, TotalDiscovered: 554, annotation: "" },
  { disc_year: 2020, Pulsar_Timing: 0, Radial_Velocity: 58, Transit: 776, Imaging: 4, Microlensing: 51, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 1, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 890, annotation: "" },
  { disc_year: 2021, Pulsar_Timing: 0, Radial_Velocity: 100, Transit: 2505, Imaging: 10, Microlensing: 41, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 3, Orbital_Brightness_Modulation: 1, Transit_Timing_Variations: 0, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 2660, annotation: "" },
  { disc_year: 2022, Pulsar_Timing: 0, Radial_Velocity: 140, Transit: 453, Imaging: 5, Microlensing: 172, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 2, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 3, Astrometry: 1, Disk_Kinematics: 0, TotalDiscovered: 776, annotation: "The 5000th exoplanets discovered in March." },
  { disc_year: 2023, Pulsar_Timing: 0, Radial_Velocity: 69, Transit: 821, Imaging: 9, Microlensing: 83, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 2, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 11, Astrometry: 1, Disk_Kinematics: 0, TotalDiscovered: 996, annotation: "" },
  { disc_year: 2024, Pulsar_Timing: 1, Radial_Velocity: 23, Transit: 325, Imaging: 11, Microlensing: 63, Pulsation_Timing_Variations: 0, Eclipse_Timing_Variations: 0, Orbital_Brightness_Modulation: 0, Transit_Timing_Variations: 5, Astrometry: 0, Disk_Kinematics: 0, TotalDiscovered: 428, annotation: "Traditional methods supported with deep learning algorithm." }
];

let currentYearIndex = 0;
const years = exoplanetData.map(d => d.disc_year);

// Set up the SVG dimensions and margins
const margin = { top: 30, right: 50, bottom: 70, left: 210 };
const width = 720 - margin.left - margin.right;
const height = 420 - margin.top - margin.bottom;

// Create the SVG container
const svg = d3.select("#plot")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

// Add the graph title
svg.append("text")
  .attr("x", width / 2)
  .attr("y", -10) // Adjust the position of the title
  .style("text-anchor", "middle")
  .style("font-size", "16px")
  .style("font-weight", "bold")
  .text("Exoplanet Discoveries By Methods From 1992 to 2024");
  
// Set up scales for the axes
const xScale = d3.scaleLinear().range([0, width]);
const yScale = d3.scaleBand().range([0, height]).padding(0.1);

// Set up the axes
const xAxis = svg.append("g")
  .style("font-size", "13px")
  .attr("transform", `translate(0,${height})`);
  
const yAxis = svg.append("g")
  .style("font-size", "13px");

// Add x-axis label
svg.append("text")
  .attr("x", width / 2)
  .attr("y", height + margin.bottom / 1.6)
  .style("text-anchor", "middle")
  .style("font-size", "16px") 
  .text("Number of Exoplanets Discovered");

// Add y-axis label
svg.append("text")
  .attr("x", -margin.left*1.1)
  .attr("y", -190)
  .attr("transform", "rotate(-90)")
  .style("text-anchor", "middle")
  .style("font-size", "16px") 
  .text("Detection Methods");
  
// Add year and annotation label at the bottom
const yearLabel = svg.append("text")
  .attr("x", width / 2)
  .attr("y", height + margin.bottom * 0.9)
  .style("text-anchor", "middle")
  .style("font-size", "16px") 
  .style("font-weight", "bold")
  .text(`Year ${exoplanetData[0].disc_year}`);
  
// Function to update the plot
function updatePlot(yearIndex) {
  const data = exoplanetData[yearIndex];

  // Prepare the data for the bar plot
  const methods = [
    { name: "Pulsar_Timing", value: data.Pulsar_Timing },
    { name: "Radial_Velocity", value: data.Radial_Velocity },
    { name: "Transit", value: data.Transit },
    { name: "Imaging", value: data.Imaging },
    { name: "Microlensing", value: data.Microlensing },
    { name: "Pulsation_Timing_Variations", value: data.Pulsation_Timing_Variations },
    { name: "Eclipse_Timing_Variations", value: data.Eclipse_Timing_Variations },
    { name: "Orbital_Brightness_Modulation", value: data.Orbital_Brightness_Modulation },
    { name: "Transit_Timing_Variations", value: data.Transit_Timing_Variations },
    { name: "Astrometry", value: data.Astrometry },
    { name: "Disk_Kinematics", value: data.Disk_Kinematics }
  ];

  // Filter out methods with zero discoveries
  const filteredMethods = methods.filter(d => d.value > 0);

  // Update the scales
  xScale.domain([0, d3.max(filteredMethods, d => d.value)]);
  yScale.domain(filteredMethods.map(d => d.name));

  const bars = svg.selectAll(".bar")
  .data(filteredMethods, d => d.name);

  // Create new bars
  bars.enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", 0)
    .attr("y", d => yScale(d.name))
    .attr("width", d => xScale(d.value))
    .attr("height", yScale.bandwidth())
    .attr("fill", "grey");

  // Update the bars (in case of any changes)
  bars.transition()
    .duration(500)
    .attr("x", 0)
    .attr("y", d => yScale(d.name))
    .attr("width", d => xScale(d.value))
    .attr("height", yScale.bandwidth());

  // Remove any old bars
  bars.exit().remove();
  
  // Update the year label with annotation
  const annotationText = data.annotation ? `Year ${data.disc_year}: ${data.annotation}` : `Year ${data.disc_year}`;
  yearLabel.text(annotationText);
  
  // Add labels to the bars
  const labels = svg.selectAll(".bar-label")
    .data(filteredMethods, d => d.name);

  labels.enter()
    .append("text")
    .attr("class", "bar-label")
    .attr("x", d => xScale(d.value) + 5) // Position label to the right of the bar
    .attr("y", d => yScale(d.name) + yScale.bandwidth() / 2)
    .attr("dy", ".35em") // Vertically center the label
    .text(d => d.value)
    .style("fill", "black")
    .style("font-size", "12px");

  // Update labels (in case of any changes)
  labels.transition()
    .duration(500)
    .attr("x", d => xScale(d.value) + 5)
    .attr("y", d => yScale(d.name) + yScale.bandwidth() / 2)
    .text(d => d.value);

  // Remove any old labels
  labels.exit().remove();

  // Update the axes
  xAxis.call(d3.axisBottom(xScale).ticks(5).tickFormat(d3.format(".0f"))); // Display only integer x-axis ticks
  yAxis.call(d3.axisLeft(yScale));
}

// Call the update function initially
updatePlot(currentYearIndex);

// Add event listeners for the buttons
document.getElementById("nextYearButton").addEventListener("click", function() {
  if (currentYearIndex < exoplanetData.length - 1) {
    currentYearIndex++;
    updatePlot(currentYearIndex);
  }
});

document.getElementById("previousYearButton").addEventListener("click", function() {
  if (currentYearIndex > 0) {
    currentYearIndex--;
    updatePlot(currentYearIndex);
  }
});