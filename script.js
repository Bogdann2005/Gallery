$(function() {

    $("ul").on("click", "img", function() {

        var imgURl = $(this).attr('src');
        var efect = $("#imgefect").val();
        var time = $("#imgtime").val() * 1000;



        if (efect === "fade") {
            $("#mainimg").fadeOut(time, function() {

                $(this).attr('src', imgURl)
            }).fadeIn(time);


        } else {
            $("#mainimg").slideUp(time, function() {

                $(this).attr('src', imgURl)
            }).slideDown(time);

        }




    })
    var zoom = $("#mainimg");
    $("#btn").on("click", function() {

        zoom.animate({ width: "+=50" }, 300)


    })
    $("#btnn").on("click", function() {

        zoom.animate({ width: "-=50" }, 300)


    })




})