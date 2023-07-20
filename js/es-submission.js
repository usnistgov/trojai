
            var esAcceptingSubmission = false;
            var esIdleNodes = 1;
            var esRunningNodes = 2;
            var esDownNodes = 0;

            $(document).ready(function () {
                   $('#esIdleNodes').text(esIdleNodes);
                   $('#esRunningNodes').text(esRunningNodes);
                   $('#esDownNodes').text(esDownNodes);
                   $('#esAcceptingSubmission').text(esAcceptingSubmission);
               });
                           