
$(function(){
    // よくある質問の表示非表示
    $(".qa-menu-open").click(function(){
        var hideStats = null;
        var target = $(this).parent().next().children("div:nth-child(1)");
        console.log(target);

        target.toggle(500, "linear");
        target.next().hide(500);
        
    });

    $(".open-answer").click(function(){
        var target = $(this).next();
        
        target.toggle(500, "linear");
    });
});
