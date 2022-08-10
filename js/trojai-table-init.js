
var sort_col;
            sort_col = $('#results-unique-round9-train').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#results-unique-round9-train').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#results-round9-train').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#results-round9-train').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#jobs-round9-train').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#jobs-round9-train').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#results-unique-round9-test').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#results-unique-round9-test').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#results-round9-test').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#results-round9-test').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#jobs-round9-test').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#jobs-round9-test').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#results-unique-round9-sts').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#results-unique-round9-sts').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#results-round9-sts').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#results-round9-sts').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#jobs-round9-sts').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#jobs-round9-sts').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#results-unique-round10-train').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#results-unique-round10-train').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#results-round10-train').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#results-round10-train').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#jobs-round10-train').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#jobs-round10-train').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#results-unique-round10-test').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#results-unique-round10-test').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#results-round10-test').find("th:contains('Cross Entropy')")[0].cellIndex;
$('#results-round10-test').dataTable({ order: [[ sort_col, 'asc' ]] });

sort_col = $('#jobs-round10-test').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#jobs-round10-test').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#results-unique-round10-sts').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#results-unique-round10-sts').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#results-round10-sts').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#results-round10-sts').dataTable({ order: [[ sort_col, 'desc' ]] });

sort_col = $('#jobs-round10-sts').find("th:contains('Execution Timestamp')")[0].cellIndex;
$('#jobs-round10-sts').dataTable({ order: [[ sort_col, 'desc' ]] });

