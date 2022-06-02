jQuery(document).ready(function(){
    //menu
    $(".navi li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(350);
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp(350);
    });

    //popup
    $(".notice li").click(function(){
        $("#modal").addClass("active")
    });
    $(".btn").click(function(){
        $("#modal").removeClass("active");
    });
});