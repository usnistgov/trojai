
                var esAcceptingSubmission = false;
                var esIdleNodes = 0;
                var esRunningNodes = 00;
                var esDownNodes = 02;
                
                 $(document).ready(function () {
                        $('#esIdleNodes').text(esIdleNodes);
                        $('#esRunningNodes').text(esRunningNodes);
                        $('#esDownNodes').text(esDownNodes);
                        $('#esAcceptingSubmission').text(esAcceptingSubmission);
                    });
                