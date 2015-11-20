/**
 * Created by Raf on 8/11/2015.
 */


function urlFinder() {

    var url = window.location.href;
    if(url.indexOf("#") > -1) {
        var n = url.lastIndexOf('#');
        var result = url.substring(n + 1);
        return result;
    }else{
        return "";
    }
    
}

$(window).on("load", function () {
    var section = urlFinder();
    var id;
    var content = $("#content");
if(section != "") {
    var oldActive = $(".active");
    $(".active").children().each(function () {
        $(this).hide();
    });

    $(oldActive).slideUp();
    $(oldActive).removeClass("active");
    $(".bold").removeClass("bold");

    content.css("display", "");
    content.find("section").each(function () {
        $(this).slideUp("slow");
    });
    id = "#" + section;


    //als section leeg is.
    if(($(id).children().length > 0) == false ) {
        id = $(id).next("section");
    }



    $("#retroCollectieUsed").show();
    //multiple sections in section
    if($(id).children(':visible').length == 0) {
       // alert("section: " + id);
        $(id).find("section").first().slideDown("slow", function () {
            content.height("initial");
        });
    }



    $(id).addClass("active");
   // alert("find is done.");
    $(id).show(function () {
        $(id).slideDown("slow", function () {
             content.height("initial");
            //footerPostion();
           // alert("id+find is done");

            if($(id).attr('id') == "eindwerk"){
                footerPostion();
                var height = content.find("div:first-child").height();
                content.height(height + 20);
            }
            else{
                console.log("other");
                content.height("initial");
                footerPostion();
            }

        });
    });

    var subnav = $(id).attr("id");
    $('ul').find("li").each(function () {
       // console.log(subnav);
      //  console.log("li found: "+ $(this).find("a").attr("link"));
       if($(this).find("a").attr("link") == subnav){
           $(this).addClass("bold");

        }
    });

    if (section == "bestellen") {
        $(this).css("color", "#E4BA08")
    } else {

        $("#bestellenLinks").css("color", "#848067")
    }




    /*pageSizer();
    footerPostion();*/

}


});
