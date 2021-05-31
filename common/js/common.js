
$(function(){
    $(".qa-menu-opne").click(function(){
        console.log("コンテンツ開くよ");
        $(this).next().find(".faq_accordion").show(1000);
        $(this).next().show(1000);
    
        // $(".faq_accordion").show(1000);
    
    
    });
});
