var vg_1 = "Graph1.json";
var vg_2 = "Graph2.json";
var vg_3 = "Graph3.json";

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
