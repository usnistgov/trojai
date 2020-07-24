
                    var uploadTimestamp = 1595619601;
                    var d = new Date(0);
                    d.setUTCSeconds(uploadTimestamp);
                    var acceptingSubmissions = false; 
                    
                    $(document).ready(function () {
                        $('#timestamp').text(d.toISOString().split('.')[0] );
                    });
                    