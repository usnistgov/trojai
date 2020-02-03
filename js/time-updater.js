
        var uploadTimestamp = 1580762462;
        var d = new Date(0);
        d.setUTCSeconds(uploadTimestamp);

        $(document).ready(function () {
            $('#timestamp').text(d.toISOString().split('.')[0] );
        });
        