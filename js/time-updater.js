
                var uploadTimestamp = 1581537301;
                var d = new Date(0);
                d.setUTCSeconds(uploadTimestamp);
                var acceptingSubmissions = false; 
                
                $(document).ready(function () {
                    $('#timestamp').text(d.toISOString().split('.')[0] );
                });
                