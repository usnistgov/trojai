
            var esAcceptingSubmission = true;
            var esIdleNodes = 0;
            var esRunningNodes = 3;
            var esDownNodes = 0;

            $(document).ready(function () {
                   $('#esIdleNodes').text(esIdleNodes);
                   $('#esRunningNodes').text(esRunningNodes);
                   $('#esDownNodes').text(esDownNodes);
                   $('#esAcceptingSubmission').text(esAcceptingSubmission);
               });
                           