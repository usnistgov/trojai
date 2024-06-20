
            var esAcceptingSubmission = false;
            var esIdleNodes = 0;
            var esRunningNodes = 1;
            var esDownNodes = 2;

            $(document).ready(function () {
                   $('#esIdleNodes').text(esIdleNodes);
                   $('#esRunningNodes').text(esRunningNodes);
                   $('#esDownNodes').text(esDownNodes);
                   $('#esAcceptingSubmission').text(esAcceptingSubmission);
               });
                           