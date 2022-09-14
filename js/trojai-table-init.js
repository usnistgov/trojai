
$(document).ready(function () {

var sort_col;

sort_col = $('#object-detection-aug2022-train-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#object-detection-aug2022-train-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#object-detection-aug2022-train-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#object-detection-aug2022-train-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#object-detection-aug2022-train-jobs').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#object-detection-aug2022-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#object-detection-aug2022-test-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#object-detection-aug2022-test-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#object-detection-aug2022-test-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#object-detection-aug2022-test-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#object-detection-aug2022-test-jobs').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#object-detection-aug2022-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#object-detection-aug2022-sts-results').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#object-detection-aug2022-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#object-detection-aug2022-sts-all-results').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#object-detection-aug2022-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#object-detection-aug2022-sts-jobs').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#object-detection-aug2022-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#image-classification-aug2020-train-results').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#image-classification-aug2020-train-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#image-classification-aug2020-train-all-results').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#image-classification-aug2020-train-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#image-classification-aug2020-train-jobs').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#image-classification-aug2020-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#image-classification-aug2020-test-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#image-classification-aug2020-test-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#image-classification-aug2020-test-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#image-classification-aug2020-test-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#image-classification-aug2020-test-jobs').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#image-classification-aug2020-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#image-classification-aug2020-sts-results').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#image-classification-aug2020-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#image-classification-aug2020-sts-all-results').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#image-classification-aug2020-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#image-classification-aug2020-sts-jobs').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#image-classification-aug2020-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });

$('.dataTables_length').addClass('bs-select');
});