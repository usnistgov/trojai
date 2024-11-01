
$(document).ready(function () {

var sort_col;

if ($('#object-detection-aug2022-train-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#object-detection-aug2022-train-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#object-detection-aug2022-train-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#object-detection-aug2022-train-all-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#object-detection-aug2022-train-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#object-detection-aug2022-train-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#object-detection-aug2022-train-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#object-detection-aug2022-train-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#object-detection-aug2022-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-aug2022-test-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#object-detection-aug2022-test-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#object-detection-aug2022-test-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#object-detection-aug2022-test-all-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#object-detection-aug2022-test-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#object-detection-aug2022-test-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#object-detection-aug2022-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#object-detection-aug2022-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#object-detection-aug2022-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-aug2022-sts-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#object-detection-aug2022-sts-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#object-detection-aug2022-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-aug2022-sts-all-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#object-detection-aug2022-sts-all-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#object-detection-aug2022-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-aug2022-sts-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#object-detection-aug2022-sts-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#object-detection-aug2022-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-aug2022-holdout-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#object-detection-aug2022-holdout-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#object-detection-aug2022-holdout-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#object-detection-aug2022-holdout-all-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#object-detection-aug2022-holdout-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#object-detection-aug2022-holdout-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#object-detection-aug2022-holdout-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#object-detection-aug2022-holdout-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#object-detection-aug2022-holdout-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-aug2022-dev-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#object-detection-aug2022-dev-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#object-detection-aug2022-dev-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#object-detection-aug2022-dev-all-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#object-detection-aug2022-dev-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#object-detection-aug2022-dev-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#object-detection-aug2022-dev-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#object-detection-aug2022-dev-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#object-detection-aug2022-dev-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#image-classification-sep2022-train-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#image-classification-sep2022-train-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#image-classification-sep2022-train-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-sep2022-train-all-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#image-classification-sep2022-train-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#image-classification-sep2022-train-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-sep2022-train-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#image-classification-sep2022-train-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#image-classification-sep2022-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#image-classification-sep2022-test-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#image-classification-sep2022-test-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#image-classification-sep2022-test-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-sep2022-test-all-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#image-classification-sep2022-test-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#image-classification-sep2022-test-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-sep2022-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#image-classification-sep2022-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#image-classification-sep2022-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#image-classification-sep2022-sts-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#image-classification-sep2022-sts-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#image-classification-sep2022-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#image-classification-sep2022-sts-all-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#image-classification-sep2022-sts-all-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#image-classification-sep2022-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#image-classification-sep2022-sts-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#image-classification-sep2022-sts-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#image-classification-sep2022-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#image-classification-sep2022-dev-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#image-classification-sep2022-dev-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#image-classification-sep2022-dev-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-sep2022-dev-all-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#image-classification-sep2022-dev-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#image-classification-sep2022-dev-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-sep2022-dev-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#image-classification-sep2022-dev-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#image-classification-sep2022-dev-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pdf-dec2022-train-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-pdf-dec2022-train-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-pdf-dec2022-train-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pdf-dec2022-train-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-pdf-dec2022-train-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-pdf-dec2022-train-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pdf-dec2022-train-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-pdf-dec2022-train-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-pdf-dec2022-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pdf-dec2022-test-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-pdf-dec2022-test-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-pdf-dec2022-test-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pdf-dec2022-test-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-pdf-dec2022-test-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-pdf-dec2022-test-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pdf-dec2022-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-pdf-dec2022-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-pdf-dec2022-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pdf-dec2022-sts-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-pdf-dec2022-sts-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-pdf-dec2022-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pdf-dec2022-sts-all-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-pdf-dec2022-sts-all-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-pdf-dec2022-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pdf-dec2022-sts-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-pdf-dec2022-sts-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-pdf-dec2022-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pdf-dec2022-dev-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-pdf-dec2022-dev-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-pdf-dec2022-dev-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pdf-dec2022-dev-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-pdf-dec2022-dev-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-pdf-dec2022-dev-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pdf-dec2022-dev-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-pdf-dec2022-dev-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-pdf-dec2022-dev-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-feb2023-train-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#object-detection-feb2023-train-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#object-detection-feb2023-train-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-feb2023-train-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#object-detection-feb2023-train-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#object-detection-feb2023-train-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-feb2023-train-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#object-detection-feb2023-train-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#object-detection-feb2023-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-feb2023-test-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#object-detection-feb2023-test-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#object-detection-feb2023-test-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-feb2023-test-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#object-detection-feb2023-test-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#object-detection-feb2023-test-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-feb2023-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#object-detection-feb2023-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#object-detection-feb2023-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-feb2023-sts-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#object-detection-feb2023-sts-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#object-detection-feb2023-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-feb2023-sts-all-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#object-detection-feb2023-sts-all-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#object-detection-feb2023-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-feb2023-sts-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#object-detection-feb2023-sts-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#object-detection-feb2023-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-feb2023-dev-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#object-detection-feb2023-dev-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#object-detection-feb2023-dev-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-feb2023-dev-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#object-detection-feb2023-dev-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#object-detection-feb2023-dev-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#object-detection-feb2023-dev-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#object-detection-feb2023-dev-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#object-detection-feb2023-dev-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-lavaworld-jul2023-train-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-lavaworld-jul2023-train-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-lavaworld-jul2023-train-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-lavaworld-jul2023-train-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-lavaworld-jul2023-train-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-lavaworld-jul2023-train-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-lavaworld-jul2023-train-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-lavaworld-jul2023-train-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-lavaworld-jul2023-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-lavaworld-jul2023-test-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-lavaworld-jul2023-test-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-lavaworld-jul2023-test-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-lavaworld-jul2023-test-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-lavaworld-jul2023-test-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-lavaworld-jul2023-test-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-lavaworld-jul2023-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-lavaworld-jul2023-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-lavaworld-jul2023-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-lavaworld-jul2023-sts-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-lavaworld-jul2023-sts-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-lavaworld-jul2023-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-lavaworld-jul2023-sts-all-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-lavaworld-jul2023-sts-all-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-lavaworld-jul2023-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-lavaworld-jul2023-sts-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-lavaworld-jul2023-sts-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-lavaworld-jul2023-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-lavaworld-jul2023-dev-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-lavaworld-jul2023-dev-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-lavaworld-jul2023-dev-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-lavaworld-jul2023-dev-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-lavaworld-jul2023-dev-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-lavaworld-jul2023-dev-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-lavaworld-jul2023-dev-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-lavaworld-jul2023-dev-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-lavaworld-jul2023-dev-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-question-answering-aug2023-train-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#nlp-question-answering-aug2023-train-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#nlp-question-answering-aug2023-train-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-question-answering-aug2023-train-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#nlp-question-answering-aug2023-train-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#nlp-question-answering-aug2023-train-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-question-answering-aug2023-train-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#nlp-question-answering-aug2023-train-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#nlp-question-answering-aug2023-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-question-answering-aug2023-test-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#nlp-question-answering-aug2023-test-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#nlp-question-answering-aug2023-test-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-question-answering-aug2023-test-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#nlp-question-answering-aug2023-test-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#nlp-question-answering-aug2023-test-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-question-answering-aug2023-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#nlp-question-answering-aug2023-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#nlp-question-answering-aug2023-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-question-answering-aug2023-sts-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#nlp-question-answering-aug2023-sts-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#nlp-question-answering-aug2023-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-question-answering-aug2023-sts-all-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#nlp-question-answering-aug2023-sts-all-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#nlp-question-answering-aug2023-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-question-answering-aug2023-sts-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#nlp-question-answering-aug2023-sts-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#nlp-question-answering-aug2023-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-question-answering-aug2023-dev-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#nlp-question-answering-aug2023-dev-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#nlp-question-answering-aug2023-dev-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-question-answering-aug2023-dev-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#nlp-question-answering-aug2023-dev-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#nlp-question-answering-aug2023-dev-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-question-answering-aug2023-dev-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#nlp-question-answering-aug2023-dev-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#nlp-question-answering-aug2023-dev-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-randomized-lavaworld-aug2023-train-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-randomized-lavaworld-aug2023-train-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-randomized-lavaworld-aug2023-train-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-randomized-lavaworld-aug2023-train-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-randomized-lavaworld-aug2023-train-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-randomized-lavaworld-aug2023-train-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-randomized-lavaworld-aug2023-train-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-randomized-lavaworld-aug2023-train-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-randomized-lavaworld-aug2023-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-randomized-lavaworld-aug2023-test-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-randomized-lavaworld-aug2023-test-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-randomized-lavaworld-aug2023-test-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-randomized-lavaworld-aug2023-test-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-randomized-lavaworld-aug2023-test-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-randomized-lavaworld-aug2023-test-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-randomized-lavaworld-aug2023-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-randomized-lavaworld-aug2023-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-randomized-lavaworld-aug2023-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-randomized-lavaworld-aug2023-sts-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-randomized-lavaworld-aug2023-sts-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-randomized-lavaworld-aug2023-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-randomized-lavaworld-aug2023-sts-all-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-randomized-lavaworld-aug2023-sts-all-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-randomized-lavaworld-aug2023-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-randomized-lavaworld-aug2023-sts-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-randomized-lavaworld-aug2023-sts-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-randomized-lavaworld-aug2023-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-randomized-lavaworld-aug2023-dev-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-randomized-lavaworld-aug2023-dev-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-randomized-lavaworld-aug2023-dev-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-randomized-lavaworld-aug2023-dev-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-randomized-lavaworld-aug2023-dev-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-randomized-lavaworld-aug2023-dev-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-randomized-lavaworld-aug2023-dev-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-randomized-lavaworld-aug2023-dev-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-randomized-lavaworld-aug2023-dev-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-apk-nov2023-train-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-apk-nov2023-train-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-apk-nov2023-train-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-apk-nov2023-train-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-apk-nov2023-train-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-apk-nov2023-train-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-apk-nov2023-train-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-apk-nov2023-train-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-apk-nov2023-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-apk-nov2023-test-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-apk-nov2023-test-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-apk-nov2023-test-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-apk-nov2023-test-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-apk-nov2023-test-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-apk-nov2023-test-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-apk-nov2023-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-apk-nov2023-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-apk-nov2023-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-apk-nov2023-dev-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-apk-nov2023-dev-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-apk-nov2023-dev-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-apk-nov2023-dev-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-apk-nov2023-dev-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-apk-nov2023-dev-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-apk-nov2023-dev-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-apk-nov2023-dev-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-apk-nov2023-dev-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-apk-nov2023-sts-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-apk-nov2023-sts-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-apk-nov2023-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-apk-nov2023-sts-all-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-apk-nov2023-sts-all-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-apk-nov2023-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-apk-nov2023-sts-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-apk-nov2023-sts-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-apk-nov2023-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-mar2024-train-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-network-c2-mar2024-train-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-network-c2-mar2024-train-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-mar2024-train-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-network-c2-mar2024-train-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-network-c2-mar2024-train-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-mar2024-train-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-network-c2-mar2024-train-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-network-c2-mar2024-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-mar2024-test-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-network-c2-mar2024-test-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-network-c2-mar2024-test-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-mar2024-test-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-network-c2-mar2024-test-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-network-c2-mar2024-test-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-mar2024-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-network-c2-mar2024-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-network-c2-mar2024-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-mar2024-sts-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-network-c2-mar2024-sts-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-network-c2-mar2024-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-mar2024-sts-all-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-network-c2-mar2024-sts-all-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-network-c2-mar2024-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-mar2024-sts-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-network-c2-mar2024-sts-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-network-c2-mar2024-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-mar2024-dev-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-network-c2-mar2024-dev-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-network-c2-mar2024-dev-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-mar2024-dev-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-network-c2-mar2024-dev-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-network-c2-mar2024-dev-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-mar2024-dev-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-network-c2-mar2024-dev-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-network-c2-mar2024-dev-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-pretrain-apr2024-train-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#llm-pretrain-apr2024-train-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#llm-pretrain-apr2024-train-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-pretrain-apr2024-train-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#llm-pretrain-apr2024-train-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#llm-pretrain-apr2024-train-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-pretrain-apr2024-train-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#llm-pretrain-apr2024-train-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#llm-pretrain-apr2024-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-pretrain-apr2024-test-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#llm-pretrain-apr2024-test-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#llm-pretrain-apr2024-test-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-pretrain-apr2024-test-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#llm-pretrain-apr2024-test-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#llm-pretrain-apr2024-test-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-pretrain-apr2024-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#llm-pretrain-apr2024-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#llm-pretrain-apr2024-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-pretrain-apr2024-sts-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#llm-pretrain-apr2024-sts-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#llm-pretrain-apr2024-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-pretrain-apr2024-sts-all-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#llm-pretrain-apr2024-sts-all-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#llm-pretrain-apr2024-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-pretrain-apr2024-sts-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#llm-pretrain-apr2024-sts-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#llm-pretrain-apr2024-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-pretrain-apr2024-dev-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#llm-pretrain-apr2024-dev-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#llm-pretrain-apr2024-dev-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-pretrain-apr2024-dev-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#llm-pretrain-apr2024-dev-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#llm-pretrain-apr2024-dev-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-pretrain-apr2024-dev-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#llm-pretrain-apr2024-dev-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#llm-pretrain-apr2024-dev-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-image-classification-jun2024-test-results').find("th:contains('Fidelity')").length > 0)
{  sort_col = $('#mitigation-image-classification-jun2024-test-results').find("th:contains('Fidelity')")[0].cellIndex;
  $('#mitigation-image-classification-jun2024-test-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-image-classification-jun2024-test-all-results').find("th:contains('Fidelity')").length > 0)
{  sort_col = $('#mitigation-image-classification-jun2024-test-all-results').find("th:contains('Fidelity')")[0].cellIndex;
  $('#mitigation-image-classification-jun2024-test-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-image-classification-jun2024-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#mitigation-image-classification-jun2024-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#mitigation-image-classification-jun2024-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-image-classification-jun2024-sts-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#mitigation-image-classification-jun2024-sts-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#mitigation-image-classification-jun2024-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-image-classification-jun2024-sts-all-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#mitigation-image-classification-jun2024-sts-all-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#mitigation-image-classification-jun2024-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-image-classification-jun2024-sts-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#mitigation-image-classification-jun2024-sts-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#mitigation-image-classification-jun2024-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-image-classification-jun2024-train-results').find("th:contains('Fidelity')").length > 0)
{  sort_col = $('#mitigation-image-classification-jun2024-train-results').find("th:contains('Fidelity')")[0].cellIndex;
  $('#mitigation-image-classification-jun2024-train-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-image-classification-jun2024-train-all-results').find("th:contains('Fidelity')").length > 0)
{  sort_col = $('#mitigation-image-classification-jun2024-train-all-results').find("th:contains('Fidelity')")[0].cellIndex;
  $('#mitigation-image-classification-jun2024-train-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-image-classification-jun2024-train-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#mitigation-image-classification-jun2024-train-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#mitigation-image-classification-jun2024-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pe-aug2024-train-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-pe-aug2024-train-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-pe-aug2024-train-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pe-aug2024-train-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-pe-aug2024-train-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-pe-aug2024-train-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pe-aug2024-train-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-pe-aug2024-train-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-pe-aug2024-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pe-aug2024-test-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-pe-aug2024-test-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-pe-aug2024-test-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pe-aug2024-test-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-pe-aug2024-test-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-pe-aug2024-test-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pe-aug2024-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-pe-aug2024-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-pe-aug2024-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pe-aug2024-sts-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-pe-aug2024-sts-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-pe-aug2024-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pe-aug2024-sts-all-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-pe-aug2024-sts-all-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-pe-aug2024-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pe-aug2024-sts-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-pe-aug2024-sts-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-pe-aug2024-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pe-aug2024-dev-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-pe-aug2024-dev-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-pe-aug2024-dev-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pe-aug2024-dev-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-pe-aug2024-dev-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-pe-aug2024-dev-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-pe-aug2024-dev-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-pe-aug2024-dev-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-pe-aug2024-dev-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-colorful-memory-sep2024-train-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-colorful-memory-sep2024-train-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-colorful-memory-sep2024-train-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-colorful-memory-sep2024-train-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-colorful-memory-sep2024-train-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-colorful-memory-sep2024-train-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-colorful-memory-sep2024-train-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-colorful-memory-sep2024-train-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-colorful-memory-sep2024-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-colorful-memory-sep2024-test-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-colorful-memory-sep2024-test-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-colorful-memory-sep2024-test-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-colorful-memory-sep2024-test-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-colorful-memory-sep2024-test-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-colorful-memory-sep2024-test-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-colorful-memory-sep2024-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-colorful-memory-sep2024-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-colorful-memory-sep2024-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-colorful-memory-sep2024-sts-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-colorful-memory-sep2024-sts-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-colorful-memory-sep2024-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-colorful-memory-sep2024-sts-all-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-colorful-memory-sep2024-sts-all-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-colorful-memory-sep2024-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-colorful-memory-sep2024-sts-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-colorful-memory-sep2024-sts-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-colorful-memory-sep2024-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-colorful-memory-sep2024-dev-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-colorful-memory-sep2024-dev-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-colorful-memory-sep2024-dev-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-colorful-memory-sep2024-dev-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-colorful-memory-sep2024-dev-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-colorful-memory-sep2024-dev-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-colorful-memory-sep2024-dev-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-colorful-memory-sep2024-dev-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-colorful-memory-sep2024-dev-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-safetygymnasium-oct2024-train-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-safetygymnasium-oct2024-train-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-safetygymnasium-oct2024-train-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-safetygymnasium-oct2024-train-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-safetygymnasium-oct2024-train-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-safetygymnasium-oct2024-train-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-safetygymnasium-oct2024-train-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-safetygymnasium-oct2024-train-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-safetygymnasium-oct2024-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-safetygymnasium-oct2024-test-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-safetygymnasium-oct2024-test-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-safetygymnasium-oct2024-test-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-safetygymnasium-oct2024-test-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-safetygymnasium-oct2024-test-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-safetygymnasium-oct2024-test-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-safetygymnasium-oct2024-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-safetygymnasium-oct2024-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-safetygymnasium-oct2024-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-safetygymnasium-oct2024-sts-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-safetygymnasium-oct2024-sts-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-safetygymnasium-oct2024-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-safetygymnasium-oct2024-sts-all-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-safetygymnasium-oct2024-sts-all-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-safetygymnasium-oct2024-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-safetygymnasium-oct2024-sts-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-safetygymnasium-oct2024-sts-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-safetygymnasium-oct2024-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-safetygymnasium-oct2024-dev-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-safetygymnasium-oct2024-dev-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-safetygymnasium-oct2024-dev-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-safetygymnasium-oct2024-dev-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#rl-safetygymnasium-oct2024-dev-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#rl-safetygymnasium-oct2024-dev-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#rl-safetygymnasium-oct2024-dev-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#rl-safetygymnasium-oct2024-dev-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#rl-safetygymnasium-oct2024-dev-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-llm-instruct-oct2024-train-results').find("th:contains('Fidelity')").length > 0)
{  sort_col = $('#mitigation-llm-instruct-oct2024-train-results').find("th:contains('Fidelity')")[0].cellIndex;
  $('#mitigation-llm-instruct-oct2024-train-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-llm-instruct-oct2024-train-all-results').find("th:contains('Fidelity')").length > 0)
{  sort_col = $('#mitigation-llm-instruct-oct2024-train-all-results').find("th:contains('Fidelity')")[0].cellIndex;
  $('#mitigation-llm-instruct-oct2024-train-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-llm-instruct-oct2024-train-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#mitigation-llm-instruct-oct2024-train-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#mitigation-llm-instruct-oct2024-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-llm-instruct-oct2024-test-results').find("th:contains('Fidelity')").length > 0)
{  sort_col = $('#mitigation-llm-instruct-oct2024-test-results').find("th:contains('Fidelity')")[0].cellIndex;
  $('#mitigation-llm-instruct-oct2024-test-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-llm-instruct-oct2024-test-all-results').find("th:contains('Fidelity')").length > 0)
{  sort_col = $('#mitigation-llm-instruct-oct2024-test-all-results').find("th:contains('Fidelity')")[0].cellIndex;
  $('#mitigation-llm-instruct-oct2024-test-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-llm-instruct-oct2024-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#mitigation-llm-instruct-oct2024-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#mitigation-llm-instruct-oct2024-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-llm-instruct-oct2024-sts-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#mitigation-llm-instruct-oct2024-sts-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#mitigation-llm-instruct-oct2024-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-llm-instruct-oct2024-sts-all-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#mitigation-llm-instruct-oct2024-sts-all-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#mitigation-llm-instruct-oct2024-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-llm-instruct-oct2024-sts-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#mitigation-llm-instruct-oct2024-sts-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#mitigation-llm-instruct-oct2024-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-llm-instruct-oct2024-dev-results').find("th:contains('Fidelity')").length > 0)
{  sort_col = $('#mitigation-llm-instruct-oct2024-dev-results').find("th:contains('Fidelity')")[0].cellIndex;
  $('#mitigation-llm-instruct-oct2024-dev-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-llm-instruct-oct2024-dev-all-results').find("th:contains('Fidelity')").length > 0)
{  sort_col = $('#mitigation-llm-instruct-oct2024-dev-all-results').find("th:contains('Fidelity')")[0].cellIndex;
  $('#mitigation-llm-instruct-oct2024-dev-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#mitigation-llm-instruct-oct2024-dev-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#mitigation-llm-instruct-oct2024-dev-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#mitigation-llm-instruct-oct2024-dev-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-instruct-oct2024-train-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#llm-instruct-oct2024-train-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#llm-instruct-oct2024-train-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-instruct-oct2024-train-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#llm-instruct-oct2024-train-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#llm-instruct-oct2024-train-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-instruct-oct2024-train-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#llm-instruct-oct2024-train-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#llm-instruct-oct2024-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-instruct-oct2024-test-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#llm-instruct-oct2024-test-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#llm-instruct-oct2024-test-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-instruct-oct2024-test-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#llm-instruct-oct2024-test-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#llm-instruct-oct2024-test-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-instruct-oct2024-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#llm-instruct-oct2024-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#llm-instruct-oct2024-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-instruct-oct2024-sts-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#llm-instruct-oct2024-sts-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#llm-instruct-oct2024-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-instruct-oct2024-sts-all-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#llm-instruct-oct2024-sts-all-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#llm-instruct-oct2024-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-instruct-oct2024-sts-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#llm-instruct-oct2024-sts-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#llm-instruct-oct2024-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-instruct-oct2024-dev-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#llm-instruct-oct2024-dev-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#llm-instruct-oct2024-dev-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-instruct-oct2024-dev-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#llm-instruct-oct2024-dev-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#llm-instruct-oct2024-dev-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#llm-instruct-oct2024-dev-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#llm-instruct-oct2024-dev-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#llm-instruct-oct2024-dev-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#image-classification-jun2020-test-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#image-classification-jun2020-test-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#image-classification-jun2020-test-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-jun2020-test-all-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#image-classification-jun2020-test-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#image-classification-jun2020-test-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-jun2020-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#image-classification-jun2020-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#image-classification-jun2020-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#image-classification-jun2020-holdout-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#image-classification-jun2020-holdout-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#image-classification-jun2020-holdout-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-jun2020-holdout-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#image-classification-jun2020-holdout-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#image-classification-jun2020-holdout-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-jun2020-holdout-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#image-classification-jun2020-holdout-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#image-classification-jun2020-holdout-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#image-classification-aug2020-test-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#image-classification-aug2020-test-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#image-classification-aug2020-test-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-aug2020-test-all-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#image-classification-aug2020-test-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#image-classification-aug2020-test-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-aug2020-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#image-classification-aug2020-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#image-classification-aug2020-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#image-classification-aug2020-holdout-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#image-classification-aug2020-holdout-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#image-classification-aug2020-holdout-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-aug2020-holdout-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#image-classification-aug2020-holdout-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#image-classification-aug2020-holdout-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-aug2020-holdout-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#image-classification-aug2020-holdout-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#image-classification-aug2020-holdout-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#image-classification-dec2020-test-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#image-classification-dec2020-test-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#image-classification-dec2020-test-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-dec2020-test-all-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#image-classification-dec2020-test-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#image-classification-dec2020-test-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-dec2020-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#image-classification-dec2020-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#image-classification-dec2020-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#image-classification-dec2020-holdout-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#image-classification-dec2020-holdout-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#image-classification-dec2020-holdout-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-dec2020-holdout-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#image-classification-dec2020-holdout-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#image-classification-dec2020-holdout-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-dec2020-holdout-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#image-classification-dec2020-holdout-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#image-classification-dec2020-holdout-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#image-classification-feb2021-test-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#image-classification-feb2021-test-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#image-classification-feb2021-test-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-feb2021-test-all-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#image-classification-feb2021-test-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#image-classification-feb2021-test-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-feb2021-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#image-classification-feb2021-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#image-classification-feb2021-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#image-classification-feb2021-holdout-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#image-classification-feb2021-holdout-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#image-classification-feb2021-holdout-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-feb2021-holdout-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#image-classification-feb2021-holdout-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#image-classification-feb2021-holdout-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#image-classification-feb2021-holdout-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#image-classification-feb2021-holdout-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#image-classification-feb2021-holdout-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-sentiment-classification-mar2021-test-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#nlp-sentiment-classification-mar2021-test-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#nlp-sentiment-classification-mar2021-test-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-sentiment-classification-mar2021-test-all-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#nlp-sentiment-classification-mar2021-test-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#nlp-sentiment-classification-mar2021-test-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-sentiment-classification-mar2021-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#nlp-sentiment-classification-mar2021-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#nlp-sentiment-classification-mar2021-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-sentiment-classification-mar2021-holdout-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#nlp-sentiment-classification-mar2021-holdout-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#nlp-sentiment-classification-mar2021-holdout-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-sentiment-classification-mar2021-holdout-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#nlp-sentiment-classification-mar2021-holdout-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#nlp-sentiment-classification-mar2021-holdout-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-sentiment-classification-mar2021-holdout-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#nlp-sentiment-classification-mar2021-holdout-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#nlp-sentiment-classification-mar2021-holdout-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-sentiment-classification-apr2021-test-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#nlp-sentiment-classification-apr2021-test-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#nlp-sentiment-classification-apr2021-test-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-sentiment-classification-apr2021-test-all-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#nlp-sentiment-classification-apr2021-test-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#nlp-sentiment-classification-apr2021-test-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-sentiment-classification-apr2021-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#nlp-sentiment-classification-apr2021-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#nlp-sentiment-classification-apr2021-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-sentiment-classification-apr2021-holdout-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#nlp-sentiment-classification-apr2021-holdout-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#nlp-sentiment-classification-apr2021-holdout-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-sentiment-classification-apr2021-holdout-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#nlp-sentiment-classification-apr2021-holdout-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#nlp-sentiment-classification-apr2021-holdout-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-sentiment-classification-apr2021-holdout-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#nlp-sentiment-classification-apr2021-holdout-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#nlp-sentiment-classification-apr2021-holdout-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-named-entity-recognition-may2021-test-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#nlp-named-entity-recognition-may2021-test-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#nlp-named-entity-recognition-may2021-test-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-named-entity-recognition-may2021-test-all-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#nlp-named-entity-recognition-may2021-test-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#nlp-named-entity-recognition-may2021-test-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-named-entity-recognition-may2021-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#nlp-named-entity-recognition-may2021-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#nlp-named-entity-recognition-may2021-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-named-entity-recognition-may2021-holdout-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#nlp-named-entity-recognition-may2021-holdout-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#nlp-named-entity-recognition-may2021-holdout-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-named-entity-recognition-may2021-holdout-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#nlp-named-entity-recognition-may2021-holdout-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#nlp-named-entity-recognition-may2021-holdout-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-named-entity-recognition-may2021-holdout-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#nlp-named-entity-recognition-may2021-holdout-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#nlp-named-entity-recognition-may2021-holdout-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-question-answering-sep2021-test-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#nlp-question-answering-sep2021-test-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#nlp-question-answering-sep2021-test-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-question-answering-sep2021-test-all-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#nlp-question-answering-sep2021-test-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#nlp-question-answering-sep2021-test-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-question-answering-sep2021-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#nlp-question-answering-sep2021-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#nlp-question-answering-sep2021-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-question-answering-sep2021-holdout-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#nlp-question-answering-sep2021-holdout-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#nlp-question-answering-sep2021-holdout-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-question-answering-sep2021-holdout-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#nlp-question-answering-sep2021-holdout-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#nlp-question-answering-sep2021-holdout-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-question-answering-sep2021-holdout-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#nlp-question-answering-sep2021-holdout-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#nlp-question-answering-sep2021-holdout-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-summary-jan2022-test-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#nlp-summary-jan2022-test-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#nlp-summary-jan2022-test-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-summary-jan2022-test-all-results').find("th:contains('Cross Entropy')").length > 0)
{  sort_col = $('#nlp-summary-jan2022-test-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
  $('#nlp-summary-jan2022-test-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-summary-jan2022-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#nlp-summary-jan2022-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#nlp-summary-jan2022-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#nlp-summary-jan2022-holdout-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#nlp-summary-jan2022-holdout-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#nlp-summary-jan2022-holdout-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-summary-jan2022-holdout-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#nlp-summary-jan2022-holdout-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#nlp-summary-jan2022-holdout-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });
}
if ($('#nlp-summary-jan2022-holdout-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#nlp-summary-jan2022-holdout-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#nlp-summary-jan2022-holdout-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-feb2024-train-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-network-c2-feb2024-train-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-network-c2-feb2024-train-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-feb2024-train-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-network-c2-feb2024-train-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-network-c2-feb2024-train-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-feb2024-train-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-network-c2-feb2024-train-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-network-c2-feb2024-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-feb2024-test-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-network-c2-feb2024-test-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-network-c2-feb2024-test-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-feb2024-test-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-network-c2-feb2024-test-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-network-c2-feb2024-test-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-feb2024-test-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-network-c2-feb2024-test-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-network-c2-feb2024-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-feb2024-sts-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-network-c2-feb2024-sts-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-network-c2-feb2024-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-feb2024-sts-all-results').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-network-c2-feb2024-sts-all-results').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-network-c2-feb2024-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-feb2024-sts-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-network-c2-feb2024-sts-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-network-c2-feb2024-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-feb2024-dev-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-network-c2-feb2024-dev-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-network-c2-feb2024-dev-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-feb2024-dev-all-results').find("th:contains('ROC-AUC')").length > 0)
{  sort_col = $('#cyber-network-c2-feb2024-dev-all-results').find("th:contains('ROC-AUC')")[0].cellIndex;
  $('#cyber-network-c2-feb2024-dev-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });
}
if ($('#cyber-network-c2-feb2024-dev-jobs').find("th:contains('Submission Timestamp')").length > 0)
{  sort_col = $('#cyber-network-c2-feb2024-dev-jobs').find("th:contains('Submission Timestamp')")[0].cellIndex;
  $('#cyber-network-c2-feb2024-dev-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });
}
$('.dataTables_length').addClass('bs-select');
});