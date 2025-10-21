var vg_1 = "Graph1.json";
var vg_2 = "Graph2.json";
var vg_3 = "Graph3.json";
var bg1 = "barGraph1.json";
var bg2 = "barGraph2.json";
var hmap1 = "heatmap1.json";

vegaEmbed("#map1", vg_1, { actions: false }).then(function(result) {
// Access the Vega view instance 
// (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

// Map 2
vegaEmbed("#map2", vg_2, { actions: false }).then(function(result) {
}).catch(console.error);

// Map 3
vegaEmbed("#map3", vg_3, { actions: false }).then(function(result) {
}).catch(console.error);

//Bar graphs
vegaEmbed("#bg1", bg1, { actions: false }).then(function(result) {
}).catch(console.error);

vegaEmbed("#bg2", bg2, { actions: false }).then(function(result) {
}).catch(console.error);

//heatmap
vegaEmbed("#hmap1", hmap1, { actions: false }).then(function(result) {
}).catch(console.error);

