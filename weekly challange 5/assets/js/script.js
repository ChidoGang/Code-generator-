function TimeElapse() {
    $("#currentDay").text(moment().format("dddd, MMMM DD, YYYY"));
    var currenttime = parseInt(moment().format("H"))
    $("textarea").each(function() {
        var currentid = parseInt($(this).attr("id"))
        if (currentid > currenttime) {
            $(this).addClass("future")
        } else if (currentid === currenttime) {
            $(this).addClass("present")
        } else {
            $(this).addClass("past")
        }
    })
}

$(document).ready(function() {
    TimeElapse()
})
