// ページ表示時のwindowサイズによってメニュー表示のクラス追加
$(window).on('load',function(){
    if (window.matchMedia('(min-width: 768px)').matches) {
        // PC表示の時の処理
        $('#global-nav').addClass('pc-menu');
    } else {
        // スマホ表示の時の処理
        $('#global-nav').removeClass('pc-menu');
    }
});


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


    // windowサイズによってメニュー表示用のクラスの追加
    $(window).resize(function(){
        if (window.matchMedia('(min-width: 768px)').matches) {
            // PC表示の時の処理
            $('#global-nav').addClass('pc-menu');
        } else {
            // スマホ表示の時の処理
            $('#global-nav').removeClass('pc-menu');
        }
    });

    // メニューボタンホバー処理(PC表示)
    $("#global-nav").hover(function(){
        if ($("#global-nav").hasClass("pc-menu")) {
            $(".header-menu-contents-list").css({"display":"block"});
        } else {
            // 画面サイズが合わなかった場合処理の中断
            return;
        }
    // カーソルが離れたときの処理
    }, function(){
        $(".header-menu-contents-list").css({"display":"none"});
    });

    // メニューボタン詳細表示(携帯画面)
    $(".menu-list-title").click(function(){
        // 画面サイズ処理
        if (!($("#global-nav").hasClass("pc-menu"))) {
            $(this).next().slideToggle();
        }
    });
});

function navToggle() {
    // id取得
    var targetNav = document.getElementById("global-nav");
    var targetWrapper = document.getElementById("global-wrapper");

    // global-nav-openを追加 / 削除
    targetNav.classList.toggle("global-nav-open");
    // global-wrapper-hideを削除 / 追加
    targetWrapper.classList.toggle("global-wrapper-hide");
}

function reload(){
    location.reload();
}
