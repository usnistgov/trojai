
var uploadTimestamp = 1663190775;
var d = new Date(0);
d.setUTCSeconds(uploadTimestamp);
var acceptingSubmissions = false; 

$(document).ready(function () {
   $('#timestamp').text(d.toISOString().split('.')[0] );
});
                   