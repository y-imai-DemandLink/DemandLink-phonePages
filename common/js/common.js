
$(function(){

    // ヘッダー表示非表示
    // $(".header-menu").click(function(){
    //     console.log("aa");
    //     var target = $("dd");
    //     target.show(500, "linear");

    // });

    $(".header-menu-open").click(function(){
        console.log("aaa");
        // $(".header-menu").toggle(200);
        // $(".header-menu").slideDown(200);
        // $(".header-menu").animate( { width: 'toggle' }, 'slow' );
        // $(".header-menu").show("slide", {direction: "right"}, 1000);
        // $(".header-menu").hide(1000);
        // $(".header-menu").hide("slide", {direction: "right"}, 1000).show("slide", {direction: "left"}, 1000);
        // $(".header-menu").show("slide", { direction: "left" }, 1000);

        // $('.header-menu').toggle("slide", {direction: "right" }, 1000);

        $('.header-menu.showhideoverlay').toggle("slow");

        // $(".header-menu").stop(true).animate({
        //     'width': ($(".header-menu").css('width') == '0px') ? '300px' : '0',  
        //     marginLeft: parseInt($(".header-menu").css('marginLeft'),10) == 0 
        //       ? $(".header-menu").outerWidth() : 0 
        // });
    });

    // よくある質問の表示非表示
    $(".qa-menu-open").click(function(){
        var hideStats = null;
        var target = $(this).parent().next().children("div:nth-child(1)");
        var list = $(this).parent().next();

        // list.toggle(500);
        target.toggle(200, "linear");
        target.next().hide(200);
        
    });

    $(".open-answer").click(function(){
        var target = $(this).next();
        
        target.toggle(200, "linear");
    });
});
