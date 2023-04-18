const chartData = {
  categories: [
    "Grand prix de Paris",
    "Turfing Motion",
    "Rambouillet",
    "Mille Fleurs",
    "Sprint in Desert",
    "Arc de Triomphe",
    "Abudhabi",
    "Vincennes",
    "Longchamp",
    "Deauville",
    "Maisons-Lafitte",
    "Saint Cloud",
    "Auteuil",
  ],
  // les séries
  series: [
    {
      name: "Pitou",
      data: [444, 457, 477, 479, 446, 476, 457, 472, 467, 455, 458, 458, 451],
    },
    {
      name: "Diana",
      data: [466, 507, 472, 475, 485, 470, 500, 496, 487, 491, 490, 476, 489],
    },
    {
      name: "Général du Pommeau",
      data: [422, 421, 419, 424, 421, 417, 424, 411, 411, 410, 414, 416, 418],
    },
  ],
};
const options = {
  //   series: { spline: true },
  //   series: { selectable: true, eventDetectType: "grouped" },
  series: { stack: { type: "percent" }, zoomable: true },
  chart: { title: "Variation du poids", width: 1300, height: 400 },
  xAxis: { pointOnColumn: false, title: { text: "Courses" } },
  yAxis: { title: "Poids" },
};
const el = document.getElementById("chart");

const chart = toastui.Chart.areaChart({
  el,
  data: chartData,
  options,
});
