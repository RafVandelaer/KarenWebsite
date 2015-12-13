/**
 * Created by Raf on 5/07/2015.
 */
$(".menuButton").hover(function(){
    var menu = $(this);
    menu.find(".subMenu").slideDown( "fast", function() {
        menu.css("font-weight", "bold");
        menu.css("padding-right", "0px");
        menu.css("padding-left", "0px");
        menu.find("ul").css("font-weight", "normal");
    });
}, function(){
    var menu = $(this);
    menu.find(".subMenu").slideUp( "fast", function() {
        menu.css("font-weight", "normal");
        menu.css("padding-right", "2px");
        menu.css("padding-left", "2px");
        menu.find("ul").css("font-weight", "normal");
    });
});
$(document).ready(function(){
    footerPostion();
});

$( window ).resize(function() {
   footerPostion();
});

function footer2(){
    var container = $("#text");
    var content = $("#content");
    var docHeight = $(window).height();
    //alert("container: " + container.prop('scrollHeight') + " document: " + docHeight);
    if (container.prop('scrollHeight') < (docHeight - (256 + 95))) {

        var headerHeight = 445;
        var rightheight = docHeight - headerHeight;
        //alert("smaller");
        $("#content").height(rightheight);
    } else {
        //alert("bigger");

        $("#content").css("height", "");
    }

    if(content.hasScrollBar()){
            $("#content").css("overflow", "");
        //alert(originalheight-newheight);
    }
    else{
        $("#content").css("overflow", "auto");
    }
}

(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
})(jQuery);

//TODO: doc height aanpassen bij klein scherm
function footerPostion(){
    //TODO aanpassen, footer 2checkt visibilty
    footer2();
    if(false) {
        var container = $("#text");
        var docHeight = $(window).height();
        //alert("container: " + container.prop('scrollHeight') + " document: " + docHeight);
        if (container.prop('scrollHeight') < (docHeight - (256 + 95))) {

            var headerHeight = 445;
            var rightheight = docHeight - headerHeight;
            //alert("smaller");
            $("#content").height(rightheight);
        } else {
            //alert("bigger");

            $("#content").css("height", "");
        }
    }
   /* var footer = $('footer');
    var height = footer.height();
    var docHeight = $(document).height();
    footer.css('top',docHeight-height);*/
}
function pageSizer(){
    var footer = $('footer');
    var height = footer.height();
    var container = $("#container");
    var docHeight = $(window).height();
    var wrapper = $("#wrapper");
    //alert('windowHeight: ' + docHeight + ", containerheight: " + container.height() + ", wrapper: " +wrapper.height());
    if(container.height() < docHeight){
        //als scherm groot genoeg is
        wrapper.height(docHeight);
        footer.css('top',docHeight-height);
       //alert('first');
    }else {
        //TODO
        //container.height(wrapper.height());
        //footer.css('bottom', footer.height);
        footer.css('bottom', 0);
        footer.css('position','relative');
       // alert('second');
    }

}
$(document).ready(function () {
    var wrapper = $('#wrapper');
    var height = wrapper.height();
    height = height - 10;
    wrapper.height(height);
    $("body").height(height);
});