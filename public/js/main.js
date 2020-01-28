jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 400});
    
    /* ======= Fixed header when scrolled ======= */
    
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 50) {
             $('#header').addClass('navbar-fixed-top');
         }
         else {
             $('#header').removeClass('navbar-fixed-top');
         }
    });
   
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -70, 'axis':'y', easing:'easeOutQuad'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	});

});

/*
    function sortResultsTable(n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("Results");
        switching = true;
        // Set the sorting direction to ascending:
        dir = "asc";
        // Make a loop that will continue until no switching has been done:
        while (switching) {
            // Start by saying: no switching is done:
            switching = false;
            rows = table.rows;
            // Loop through all table rows (except the first, which contains table headers):
            for (i = 1; i < (rows.length - 1); i++) {
                // Start by saying there should be no switching:
                shouldSwitch = false;
                // Get the two elements you want to compare, one from current row and one from the next:
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                // Check if the two rows should switch place, based on the direction, asc or desc:
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            // If a switch has been marked, make the switch and mark that a switch has been done: 
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount ++;
        } else {
        // If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.
        if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
            }
        }
    }
*/
/*
    function sortJobTable(n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("Jobs");
        switching = true;
        // Set the sorting direction to ascending:
        dir = "asc";
        // Make a loop that will continue until no switching has been done:
        while (switching) {
            // Start by saying: no switching is done:
            switching = false;
            rows = table.rows;
            // Loop through all table rows (except the first, which contains table headers):
            for (i = 1; i < (rows.length - 1); i++) {
                // Start by saying there should be no switching:
                shouldSwitch = false;
                // Get the two elements you want to compare, one from current row and one from the next:
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                // Check if the two rows should switch place, based on the direction, asc or desc:
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            // If a switch has been marked, make the switch and mark that a switch has been done: 
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount ++;
        } else {
        // If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.
        if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
            }
        }
    }
*/
// Takes a table row element and an index and returns the normalized form
// of the sort attribute for the nth-child td. To be more clear, take the
// nth-child td element inside this table row as defined by index (that is
// `:nth-child(idx)`) and then normalize it's sort attribute (if it exists)
// otherwise use the internal text.
function sort_attr ($tr, idx) {
    var $td = $tr.children("td:nth-child(" + idx + ")"),
        sort_attr = $td.attr("sort")
    if (typeof(sort_attr) === "undefined") {
        sort_attr = $td.text()
    }

    // Normalize case
    sort_attr = sort_attr.trim().toLowerCase()

    // Try to treat this as an integer
    var int_attr = parseInt(sort_attr)
    if (int_attr === 0 || !!int_attr && typeof(int_attr) == "number") {
        return int_attr
    }

    // Guess we're using a string
    return sort_attr
}

// Returns a sorting function that can be applied to an array.
function _sort (idx, ascending) {
    return ascending ? function _sorter (a, b) {
        return sort_attr($(a), idx) > sort_attr($(b), idx) ? 1 : -1;
    } : function _sorter (a, b) {
        return sort_attr($(a), idx) < sort_attr($(b), idx) ? 1 : -1;
    }
}

// When clicking on a table header, perform some sorting.
$("table thead th").on("click", function () {
    var self = $(this)

    // Setup sort direction, defaulting to ascending and reversing
    // direction if previously set.
    var asc = self.attr("asc") == "true" ? false : true
    self.attr("asc", asc)

    // Clear all directions
    $(".dir").html("")

    // Setup current direction flag
    self.find(".dir").html(asc ? "&nbsp;(&#9650;)" : "&nbsp;(&#9660;)")

    // Sort!
    var fn = _sort(self.index() + 1, asc)
    $("table tbody").html($("table tbody tr").sort(fn))
})

// Affix a .dir to every th
$("table thead th").append("<span class=\"dir\"></span>");
