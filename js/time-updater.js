
                    var uploadTimestamp = 1601052001;
                    var d = new Date(0);
                    d.setUTCSeconds(uploadTimestamp);
                    var acceptingSubmissions = false; 
                    
                    $(document).ready(function () {
                        $('#timestamp').text(d.toISOString().split('.')[0] );
                    });
                    