
                var esAcceptingSubmission = false;
                var esIdleNodes = 4;
                var esRunningNodes = 0;
                var esDownNodes = 1;
                
                 $(document).ready(function () {
                        $('#esIdleNodes').text(esIdleNodes);
                        $('#esRunningNodes').text(esRunningNodes);
                        $('#esDownNodes').text(esDownNodes);
                        $('#esAcceptingSubmission').text(esAcceptingSubmission);
                    });
                