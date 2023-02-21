
            var stsAcceptingSubmission = true;
            var stsIdleNodes = 0;
            var stsRunningNodes = 1;
            var stsDownNodes = 0;

            $(document).ready(function () {
                   $('#stsIdleNodes').text(stsIdleNodes);
                   $('#stsRunningNodes').text(stsRunningNodes);
                   $('#stsDownNodes').text(stsDownNodes);
                   $('#stsAcceptingSubmission').text(stsAcceptingSubmission);
               });
                           