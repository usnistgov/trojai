
                var uploadTimestamp = 1580817004;
                var d = new Date(0);
                d.setUTCSeconds(uploadTimestamp);

                $(document).ready(function () {
                    $('#timestamp').text(d.toISOString().split('.')[0] );
                });
                