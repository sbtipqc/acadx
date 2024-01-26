// LOAD JS [REQUIRED FOR ALL]

$(window).on('load', function() {
    function finishLoad() {
        window.location.href = "../courses.gen.html";
    }
    window.setTimeout(finishLoad, 2500)
  })