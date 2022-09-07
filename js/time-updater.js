
var uploadTimestamp = 1662585332;
var d = new Date(0);
d.setUTCSeconds(uploadTimestamp);
var acceptingSubmissions = true; 

$(document).ready(function () {
   $('#timestamp').text(d.toISOString().split('.')[0] );
});
                   