
    var stsAcceptingSubmission = false;
    var stsIdleNodes = 0;
    var stsRunningNodes = 0;
    var stsDownNodes = 0;
    
    $(document).ready(function () {
           $('#stsIdleNodes').text(stsIdleNodes);
           $('#stsRunningNodes').text(stsRunningNodes);
           $('#stsDownNodes').text(stsDownNodes);
           $('#stsAcceptingSubmission').text(stsAcceptingSubmission);
       });
                   