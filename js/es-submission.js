
                var esAcceptingSubmission = false;
                var esIdleNodes = 0;
                var esRunningNodes = 0;
                var esDownNodes = 10;
                
                 $(document).ready(function () {
                        $('#esIdleNodes').text(esIdleNodes);
                        $('#esRunningNodes').text(esRunningNodes);
                        $('#esDownNodes').text(esDownNodes);
                        $('#esAcceptingSubmission').text(esAcceptingSubmission);
                    });
                