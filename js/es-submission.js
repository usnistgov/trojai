
            var esAcceptingSubmission = false;
            var esIdleNodes = -1;
            var esRunningNodes = 0;
            var esDownNodes = 4;

            $(document).ready(function () {
                   $('#esIdleNodes').text(esIdleNodes);
                   $('#esRunningNodes').text(esRunningNodes);
                   $('#esDownNodes').text(esDownNodes);
                   $('#esAcceptingSubmission').text(esAcceptingSubmission);
               });
                           