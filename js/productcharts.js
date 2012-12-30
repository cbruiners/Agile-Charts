	$(function () {
    			var chart;
    			$(document).ready(function() {
        			chart = new Highcharts.Chart({
            			chart: {
               				renderTo: 'productburndown',
                			type: 'spline'
            			},
            title: {
                text: 'Product Burndown',
                x: -20 //center
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
            title: {
                    text: 'Sprint'
                },
                categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            },
            yAxis: {
                title: {
                    text: 'Sprints'
                },
                min: 0,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
            },
            tooltip: {
				crosshairs: [true, true],
                /*formatter: function() {
                        return ''+
                        Highcharts.dateFormat('%e. %b %Y, %H:00', this.x) +': '+ this.y +' items';
                }*/
            },
                        plotOptions: {
            series: {
                marker: {
                    enabled: false   
                }
            },
            },
           series: [{
                name: 'Ideal(h)',
                data: [100.0, 90.0, 80.0, 70.0, 60.0, 50.0, 40.0, 30.0, 20.0, 10.0, 0.0]
    
            }, {
                name: 'Actual(h)',
                data: [100.0, 102.0, 80.0, 75.0, 55.0, 67.0, 48.0, 38.0, 22.0, 13.0, 9.0]
            }, {
                name: 'Ideal(p)',
                data: [34.0, 30.6, 27.2, 23.8, 20.4, 17.0, 13.6, 10.2, 6.8, 3.4, 0.0]
            }, {
                name: 'Actual(p)',
                data: [34.0, 38.0, 38.0, 30.0, 26.0, 22.0, 17.0, 12.0, 8.0, 6.0, 3.0]
            }, {
            	name: 'P',
        		data: [176.0, 135.6, 148.5, 190.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4],
        		dashStyle: 'LongDash'
    		}],  
            //dashStyle: 'LongDash'
            navigation: {
                menuItemStyle: {
                    fontSize: '10px'
                }
            }
        });
    });
    
});

