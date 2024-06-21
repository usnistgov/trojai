
            var esAcceptingSubmission = false;
            var esIdleNodes = 0;
            var esRunningNodes = 2;
            var esDownNodes = 1;

            $(document).ready(function () {
                   $('#esIdleNodes').text(esIdleNodes);
                   $('#esRunningNodes').text(esRunningNodes);
                   $('#esDownNodes').text(esDownNodes);
                   $('#esAcceptingSubmission').text(esAcceptingSubmission);
               });
                           