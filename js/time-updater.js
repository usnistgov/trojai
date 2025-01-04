
    var uploadTimestamp = 1735964714;
    var d = new Date(0);
    d.setUTCSeconds(uploadTimestamp);
    var acceptingSubmissions = true; 
    
    $(document).ready(function () {
       $('#timestamp').text(d.toISOString().split('.')[0] );
    });
                       