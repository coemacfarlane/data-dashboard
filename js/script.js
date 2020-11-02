// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
import * as data from './data.js'

$(document).ready(function() {
    var d = data.a;

    $('table').DataTable({
        data: d,
        columns: [
            {data: 'state'},
            {data: 'initial_colonies'},
            {data: 'max_colonies'},
            {data: 'lost_colonies'},
            {data: 'added_colonies'}
        ]
    });

    let percentLostData = d.map(c => {
        return {'state': c['state'], 'percentLost' : (c['lost_colonies']/c["initial_colonies"]* 100)}
    });
    var map = AmCharts.makeChart("mapdiv",{
        type: "map",
        theme: "light",
        panEventsEnabled : true,
        backgroundAlpha : 1,
        colorSteps: 10,
        zoomControl: {
            zoomControlEnabled : true
        },
        dataProvider : {
            map : "usaLow",
            areas :
            [ {
                "id": "US-AL",
                "value": tryFindValue(percentLostData, 'New Jersey')
              }, {
                "id": "US-AK",
                "value": tryFindValue(percentLostData, 'Alaska')
              }, {
                "id": "US-AZ",
                "value": tryFindValue(percentLostData, 'Arizona')
              }, {
                "id": "US-AR",
                "value": tryFindValue(percentLostData, 'Arkansas')
              }, {
                "id": "US-CA",
                "value": tryFindValue(percentLostData, 'California')
              }, {
                "id": "US-CO",
                "value": tryFindValue(percentLostData, 'Colorado')
              }, {
                "id": "US-CT",
                "value": tryFindValue(percentLostData, 'Connecticut')
              }, {
                "id": "US-DE",
                "value": tryFindValue(percentLostData, 'Delaware')
              }, {
                "id": "US-FL",
                "value": tryFindValue(percentLostData, 'Florida')
              }, {
                "id": "US-GA",
                "value": tryFindValue(percentLostData, 'Georgia')
              }, {
                "id": "US-HI",
                "value": tryFindValue(percentLostData, 'Hawaii')
              }, {
                "id": "US-ID",
                "value": tryFindValue(percentLostData, 'Idaho')
              }, {
                "id": "US-IL",
                "value": tryFindValue(percentLostData, 'Illinois')
              }, {
                "id": "US-IN",
                "value": tryFindValue(percentLostData, 'Indiana')
              }, {
                "id": "US-IA",
                "value": tryFindValue(percentLostData, 'Iowa')
              }, {
                "id": "US-KS",
                "value": tryFindValue(percentLostData, 'Kansas')
              }, {
                "id": "US-KY",
                "value": tryFindValue(percentLostData, 'Kentucky')
              }, {
                "id": "US-LA",
                "value": tryFindValue(percentLostData, 'Louisiana')
              }, {
                "id": "US-ME",
                "value": tryFindValue(percentLostData, 'Maine')
              }, {
                "id": "US-MD",
                "value": tryFindValue(percentLostData, 'Maryland')
              }, {
                "id": "US-MA",
                "value": tryFindValue(percentLostData, 'Massachusetts')
              }, {
                "id": "US-MI",
                "value": tryFindValue(percentLostData, 'Michigan')
              }, {
                "id": "US-MN",
                "value": tryFindValue(percentLostData, 'Minnesota')
              }, {
                "id": "US-MS",
                "value": tryFindValue(percentLostData, 'Mississippi')
              }, {
                "id": "US-MO",
                "value": tryFindValue(percentLostData, 'Missouri')
              }, {
                "id": "US-MT",
                "value": tryFindValue(percentLostData, 'Montana')
              }, {
                "id": "US-NE",
                "value": tryFindValue(percentLostData, 'Nebraska')
              }, {
                "id": "US-NV",
                "value": tryFindValue(percentLostData, 'Nevada')
              }, {
                "id": "US-NH",
                "value": tryFindValue(percentLostData, 'New Hampshire')
              }, {
                "id": "US-NJ",
                "value": tryFindValue(percentLostData, 'New Jersey')
              }, {
                "id": "US-NM",
                "value": tryFindValue(percentLostData, 'New Mexico')
              }, {
                "id": "US-NY",
                "value": tryFindValue(percentLostData, 'New York')
              }, {
                "id": "US-NC",
                "value": tryFindValue(percentLostData, 'North Carolina')
              }, {
                "id": "US-ND",
                "value": tryFindValue(percentLostData, 'North Dakota')
              }, {
                "id": "US-OH",
                "value": tryFindValue(percentLostData, 'Ohio')
              }, {
                "id": "US-OK",
                "value": tryFindValue(percentLostData, 'Oklahoma')
              }, {
                "id": "US-OR",
                "value": tryFindValue(percentLostData, 'Oregon')
              }, {
                "id": "US-PA",
                "value": tryFindValue(percentLostData, 'Pennsylvania')
              }, {
                "id": "US-RI",
                "value": tryFindValue(percentLostData, 'Rhode Island')
              }, {
                "id": "US-SC",
                "value": tryFindValue(percentLostData, 'South Carolina')
              }, {
                "id": "US-SD",
                "value": tryFindValue(percentLostData, 'South Dakota')
              }, {
                "id": "US-TN",
                "value": tryFindValue(percentLostData, 'Tennessee')
              }, {
                "id": "US-TX",
                "value": tryFindValue(percentLostData, 'Texas')
              }, {
                "id": "US-UT",
                "value": tryFindValue(percentLostData, 'Utah')
              }, {
                "id": "US-VT",
                "value": tryFindValue(percentLostData, 'Vermont')
              }, {
                "id": "US-VA",
                "value": tryFindValue(percentLostData, 'Virginia')
              }, {
                "id": "US-WA",
                "value": tryFindValue(percentLostData, 'Washington')
              }, {
                "id": "US-WV",
                "value": tryFindValue(percentLostData, 'West Virginia')
              }, {
                "id": "US-WI",
                "value": tryFindValue(percentLostData, 'Wisconsin')
              }, {
                "id": "US-WY",
                "value": tryFindValue(percentLostData, 'Wyoming')
              } ]  
        },
        areasSettings : {
            autoZoom : true,
            color : "#e3e3e6",
            colorSolid : "#6771dc",
            selectedColor : "#8067dc",
            outlineColor : "#fff",
            outlineThickness: 2,
            rollOverColor : "#67b7dc",
            rollOverOutlineColor : "#fff",
            balloonText : "[[title]] : [[value]]"
        },
        valueLegend: {
            right: 10,
            minValue: "Few Bees",
            maxValue: "Many Bees"
        },
    });

    
    let ordered = d.sort((a, b) => {
        return  (b.max_colonies - b.initial_colonies) - (a.max_colonies - a.initial_colonies)
    });
    
    var tenMost = [];
    let i = 0;
    while(tenMost.length < 10) { 
        if (ordered[i].state !== "United States") {
            tenMost.push(ordered[i]) 
        }
        else {
            i++;
            tenMost.push(ordered[i]) 
        }
        i++;
    };

    tenMost = tenMost.map(c => {
        return {state : c.state, dif : (c.max_colonies-c.initial_colonies)}
    })
    var chart = am4core.createFromConfig({
    "xAxes": [{
        "type": "CategoryAxis",
        "dataFields": {
            "category": "state"
        }
        }],
        "yAxes": [{
        "type": "ValueAxis"
        }],
        "series": [{
            "type": "ColumnSeries",
            "dataFields": {
                "categoryX": "state",
                "valueY": "dif"
            },
            "name": "Growth"
        }],
        "data": tenMost,
        "colors": {
        "list": [
            "#67b7dc"
        ]
        },
        "cursor": {}
    }, "chartdiv", am4charts.XYChart);

    var ratios = d.map(c => {
        return {state: c.state, added: (c.added_colonies / c.initial_colonies * 100).toFixed(2), lost: (c.lost_colonies / c.initial_colonies * 100).toFixed(2)}
    }).sort((a,b) => {
        return Math.abs((a.added - a.lost)) - Math.abs((b.added - b.lost))
    });
    ratios = ratios.slice(ratios.length-10, ratios.length);
    console.log(ratios)
    var clusterchart = am4core.createFromConfig({
        "xAxes": [{
            "type": "CategoryAxis",
            "dataFields": {
                "category": "state"
            }
            }],
            "numberFormatter": {
                "numberFormat": "#.#'%'"
            },
            "data": ratios,
            "yAxes": [{
                "type": "ValueAxis"
            }],
            "series": [{
                "type": "ColumnSeries",
                "name": "Lost",
                "stacked": 'true',
                "dataFields": {
                    "categoryX": "state",
                    "valueY": "lost"
                },
                "columns": {
                    "tooltipText": "{categoryX}\nLost: {lost}\nAdded: {added}",
                    "fill": "#67b7dc"
                }
                }, {
                "type": "ColumnSeries",
                "stacked": 'true',
                "dataFields": {
                    "categoryX": "state",
                    "valueY": "added"
                }
            }],
            "colors": {
                "step": 2
            },
            "cursor": {}
        }, "ratiochart", am4charts.XYChart);
});

function tryFindValue(data, state) {
    try {
        return data.find(e => {
            return e.state == state
        }).percentLost.toFixed(2);
    }
    catch {
        return 'NA';
    }
}
