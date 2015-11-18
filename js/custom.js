/* Theme Name: The Project - Responsive Website Template
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version:1.1.0
 * Created:March 2015
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */


(function($){
	$(document).ready(function(){

			if ($(".graph.bar").length>0) {
				// Data for bar charts
				
				var barChartData = {
				    labels: ["Ping 1500 Servers"],
				    datasets: [
				        {
				            label: "Parallec",
				            fillColor: "rgba(151,187,205,0.5)",
				            strokeColor: "rgba(151,187,205,0.8)",
				            highlightFill: "rgba(151,187,205,0.75)",
				            highlightStroke: "rgba(151,187,205,1)",
				            data: [2.2]
				        },
				        {
				            label: "FPing",
				            fillColor: "rgba(220,220,220,0.5)",
				            strokeColor: "rgba(220,220,220,0.8)",
				            highlightFill: "rgba(220,220,220,0.75)",
				            highlightStroke: "rgba(220,220,220,1)",		
				            data: [4.5]
				        }
				  	  ]
					};
			var barChartDataHttp = {
				    labels: ["HTTP 8K Servers"],
				    datasets: [
				        {
				            label: "To Mem",
				            fillColor: "rgba(151,187,205,0.5)",
				            strokeColor: "rgba(151,187,205,0.8)",
				            highlightFill: "rgba(151,187,205,0.75)",
				            highlightStroke: "rgba(151,187,205,1)",
				            data: [12.0]
				        },
				        {
				            label: "To E.S.",
				            fillColor: "rgba(220,220,220,0.5)",
				            strokeColor: "rgba(220,220,220,0.8)",
				            highlightFill: "rgba(220,220,220,0.75)",
				            highlightStroke: "rgba(220,220,220,1)",		
				            data: [15.6]
				        }
				  	  ]
					};				
				// Bar Charts Initialization		
				$(window).load(function() {
					var ctx = document.getElementById("http-bars").getContext("2d");
					window.myBar = new Chart(ctx).Bar(barChartDataHttp, {
						responsive : true,
						multiTooltipTemplate: "<%= datasetLabel %> - <%= value %> Sec"
					});
				});				
				$(window).load(function() {
					var ctx = document.getElementById("fping-bars").getContext("2d");
					window.myBar = new Chart(ctx).Bar(barChartData, {
						responsive : true,
						multiTooltipTemplate: "<%= datasetLabel %> - <%= value %> Sec"
					});
				});
			}

		}); // End document ready
})(this.jQuery);