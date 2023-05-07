$(function() {
    var slide_main = $(".slide").slick({
      asNavFor: ".slide-navigation",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
    });
    var slide_sub = $(".slide-navigation").slick({
      asNavFor: ".slide",
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 400,
      focusOnSelect: true,
    });
    var open_window_Width = $(window).width();
    $(window).resize(function() {
      var width = $(window).width();
      if (open_window_Width != width) {
        slide_main.slick("setPosition");
        slide_sub.slick("setPosition");
      }
    });
  });

  //form要素の参照
  const formElement = document.querySelector('form');
  //送信イベントを監視
  formElement.addEventListener('submit',handleSubmit);

  //送信イベント発生時
  function handleSubmit(event){
    //confirmでユーザーに確認する
    const isYes = confirm('この内容で送信していいですか？');

    //いいえを選択した場合
    if (isYes === false){
      //挙動をキャンセル
      event.preventDefault();
    }
  }
