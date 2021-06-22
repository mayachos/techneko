// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fadeUpTrigger').each(function() { //fadeInUpTriggerというクラス名が
        　　 var elemPos = $(this).offset().top - 5; //要素より、50px上の
        　　 var scroll = $(window).scrollTop();　　 var windowHeight = $(window).height();　　 if (scroll >= elemPos - windowHeight) {　　 $(this).addClass('fadeUp');　　 // 画面内に入ったらfadeInというクラス名を追記
            　　 } else {　　　 $(this).removeClass('fadeUp');　　 // 画面外に出たらfadeInというクラス名を外す
            　　 }　　 });
    $('.fadeInTrigger').each(function() { //fadeInUpTriggerというクラス名が
        　　 var elemPos = $(this).offset().top - 50; //要素より、50px上の
        　　 var scroll = $(window).scrollTop();　　 var windowHeight = $(window).height();　　 if (scroll >= elemPos - windowHeight) {　　 $(this).addClass('fadeIn');　　 // 画面内に入ったらfadeInというクラス名を追記
            　　 } else {　　　 $(this).removeClass('fadeIn');　　 // 画面外に出たらfadeInというクラス名を外す
            　　 }　　 });
    $('.blurTrigger').each(function() { //blurTriggerというクラス名が
        var elemPos = $(this).offset().top - 55; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('blur'); // 画面内に入ったらblurというクラス名を追記
        } else {
            $(this).removeClass('blur'); // 画面外に出たらblurというクラス名を外す
        }
    });


} //ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function() {
    fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function() {
    fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述



//マウスストーカー用のdivを取得
const stalker = document.createElement('div');
stalker.id = 'stalker'; //IDを付与
document.body.appendChild(stalker); //bodyの最後に挿入

//上記のdivタグをマウスに追従させる処理
document.addEventListener('mousemove', function(e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});