
                var uploadTimestamp = 1581548941;
                var d = new Date(0);
                d.setUTCSeconds(uploadTimestamp);
                var acceptingSubmissions = true; 
                
                $(document).ready(function () {
                    $('#timestamp').text(d.toISOString().split('.')[0] );
                });
                