
            var esAcceptingSubmission = true;
            var esIdleNodes = -2;
            var esRunningNodes = 0;
            var esDownNodes = 5;

            $(document).ready(function () {
                   $('#esIdleNodes').text(esIdleNodes);
                   $('#esRunningNodes').text(esRunningNodes);
                   $('#esDownNodes').text(esDownNodes);
                   $('#esAcceptingSubmission').text(esAcceptingSubmission);
               });
                           