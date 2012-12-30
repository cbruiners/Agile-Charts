// INITIAL CALL TO DRAW SPRINT CHARTS
	SprintCycle();
	SprintCumulativeFlow();
	SprintBurnDown();

// DRAWS SPRINT CUMULATIVE FLOW CHART
	function SprintCumulativeFlow() {
    	    var options = {
            chart: {
                renderTo: 'sprintcumulative',
                 events: {
					load: function() {
                		this.renderer.image('img/magnifyingglass.png', 40, 10, 22, 22)
                    	.on('click', function() {
                        	$('div.defaultcharts').toggleClass('largecharts')
                        	SprintCycle()
                        	SprintCumulativeFlow()
                        	SprintBurnDown()
                    	})
                    	.css({
                    		cursor: 'pointer',
                        	opacity: 0.75
                    	})
                    	.add();
            					}
						},
				type: 'area'
            },
            tooltip: {
				crosshairs: [true, true],
				shared: true
            },
            title: {
               text:'Cumulative Flow'
            },
            xAxis: {
            	categories: ['07/01', '08/01', '09/01', '10/01', '11/01', '14/01', '15/01', '16/01', '17/01', '18/01'],
                tickmarkPlacement: 'on',
                title: {
                	text: 'Date'
                }
            },
            yAxis: {
            	title: {
                	text: 'Queue Size'
                },
				gridLineWidth: 0
            },
            plotOptions: {
            	series: {
                	marker: {
                    	enabled: false   
                	}
            	},
                area: {
                    stacking: 'normal',
                    lineColor: '#666',
                    lineWidth: 0,
                    marker: {
                        lineWidth: 0,
                        lineColor: '#666'
                    }
                }
            },
            series: []
    	};
       	$.getJSON('data/data_sprintcumulativeflow.json', function(json) {
       //alert('TEST');
       	if (!chart) {
            // if it's not rendered you have to update your options
            options.series = json;
            chart = new Highcharts.Chart(options);
        } else {
            // if it's rendered you have to update dinamically
            jQuery.each(json, function(seriePos, serie) {
                chart.series[seriePos].setData(serie, false);
            });
            chart.redraw();
        }
    		var chart = '';  
        });
	}
// DRAWS SPRINT BURNDOWN CHART
	function SprintBurnDown() {
    	var options = {
        	chart: {
            	renderTo: 'sprintburndown',
                events: {
					load: function() {
                		this.renderer.image('img/magnifyingglass.png', 40, 10, 22, 22)
                    	.on('click', function() {
                        	$('div.defaultcharts').toggleClass('largecharts')
                        	SprintCycle()
                        	SprintCumulativeFlow()
                        	SprintBurnDown()
                    	})
                    	.css({
                    		cursor: 'pointer',
                        	opacity: 0.75
                    	})
                    	.add();
            		}
				},
				type: 'spline'
            },
            tooltip: {
				crosshairs: [true, true],
				shared: true
            },
            title: {
               text:'Sprint Burndown'
            },
            xAxis: {
            	categories: ['07/01', '08/01', '09/01', '10/01', '11/01', '14/01', '15/01', '16/01', '17/01', '18/01'],
                tickmarkPlacement: 'on',
                title: {
                	text: 'Date'
                }
            },
            yAxis: {
                title: {
                    text: 'Items (PBIs) remaining'
                	},
                min: 0,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
            },
            plotOptions: {
            	series: {
                	marker: {
                    	enabled: false   
                	}
            	},
                area: {
                    stacking: 'normal',
                    lineColor: '#666',
                    lineWidth: 0,
                    marker: {
                        lineWidth: 0,
                        lineColor: '#666'
                    }
                }
            },
            series: []
         };
       $.getJSON('data/data_sprintburndown.json', function(json) {
       if (!chart) {
            // if it's not rendered you have to update your options
            options.series = json;
            chart = new Highcharts.Chart(options);
        } else {
            // if it's rendered you have to update dinamically
            jQuery.each(json, function(seriePos, serie) {
                chart.series[seriePos].setData(serie, false);
            });
            chart.redraw();
        }
    	  var chart = '';  
        }); 
	}
// DRAWS OUT STORY SPRINT CYCLE
	function SprintCycle() {
		var options = {
            chart: {
                renderTo: 'sprintcycle',
                 events: {
					load: function() {
                		this.renderer.image('img/magnifyingglass.png', 40, 10, 22, 22)
                    	.on('click', function() {
                        	$('div.defaultcharts').toggleClass('largecharts')
                        	SprintCycle()
                        	SprintCumulativeFlow()
                        	SprintBurnDown()
                    	})
                    	.css({
                    		cursor: 'pointer',
                        	opacity: 0.75
                    	})
                    	.add();
            					}
						},
				type: 'column'
            },
            tooltip: {
				crosshairs: [true, true]
                
            },
            title: {
               text:'Cycle Times'
            },
            xAxis: {
            	categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11+'],
                tickmarkPlacement: 'on',
                title: {
                	text: 'WIP Days'
                }
            },
            yAxis: {
                title: {
                    text: 'Items'
                },
                min: 0,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
            },
            plotOptions: {
            	series: {
                	marker: {
                    	enabled: false   
                	}
            	},
                area: {
                    stacking: 'normal',
                    lineColor: '#666',
                    lineWidth: 0,
                    marker: {
                        lineWidth: 0,
                        lineColor: '#666'
                    }
                }
            },
            series: []
         };
       $.getJSON('data/data_sprintcycletime.json', function(json) {
       if (!chart) {
            // if it's not rendered you have to update your options
            options.series = json;
            chart = new Highcharts.Chart(options);
        } else {
            // if it's rendered you have to update dinamically
            jQuery.each(json, function(seriePos, serie) {
                chart.series[seriePos].setData(serie, false);
            });
            chart.redraw();
        }
    	  var chart = '';  
        }); 
    }