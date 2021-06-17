
$(function(){

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

function navToggle() {
    // id取得
    var targetNav = document.getElementById("global-nav");
    var targetWrapper = document.getElementById("global-wrapper");

    console.log(targetNav);
    console.log(targetWrapper);

    // global-nav-openを追加 / 削除
    targetNav.classList.toggle("global-nav-open");
    // global-wrapper-hideを削除 / 追加
    targetWrapper.classList.toggle("global-wrapper-hide");
}
