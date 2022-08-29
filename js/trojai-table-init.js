
$(document).ready(function () {

var sort_col;

sort_col = $('#image-classification-2022-train-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#image-classification-2022-train-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#image-classification-2022-train-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#image-classification-2022-train-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#image-classification-2022-train-jobs').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#image-classification-2022-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#image-classification-2022-test-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#image-classification-2022-test-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#image-classification-2022-test-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#image-classification-2022-test-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#image-classification-2022-test-jobs').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#image-classification-2022-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#image-classification-2022-sts-results').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#image-classification-2022-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#image-classification-2022-sts-all-results').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#image-classification-2022-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#image-classification-2022-sts-jobs').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#image-classification-2022-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#round9-train-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#round9-train-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#round9-train-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#round9-train-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#round9-train-jobs').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#round9-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#round9-test-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#round9-test-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#round9-test-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#round9-test-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#round9-test-jobs').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#round9-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#round9-sts-results').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#round9-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#round9-sts-all-results').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#round9-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#round9-sts-jobs').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#round9-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#round10-train-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#round10-train-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#round10-train-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#round10-train-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#round10-train-jobs').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#round10-train-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#round10-test-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#round10-test-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#round10-test-all-results').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#round10-test-all-results').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#round10-test-jobs').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#round10-test-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#round10-sts-results').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#round10-sts-results').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#round10-sts-all-results').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#round10-sts-all-results').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#round10-sts-jobs').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#round10-sts-jobs').dataTable({ order: [[ sort_col, 'desc' ]] });

$('.dataTables_length').addClass('bs-select');
});