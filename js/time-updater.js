
                var uploadTimestamp = 1580800384;
                var d = new Date(0);
                d.setUTCSeconds(uploadTimestamp);

                $(document).ready(function () {
                    $('#timestamp').text(d.toISOString().split('.')[0] );
                });
                