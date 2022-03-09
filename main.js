"use strict";

// 文字の書き換え
$(() => {
  $("#text1").text("Change");
});
// ボタンを押したら文字の変更
$(() => {
  $("#button1").click(() => {
    $("#text2").text("Hello");
  });
});
// クラスの追加
$(() => {
  $("addclass").addClass("addclass1");
});

// 複数要素の取得、特定の要素、要素の削除
$(".remove1 > li").eq(2).remove();

// スタイルの変更
$(() => {
  $("#button2").click(() => {
    $("#addstyle1").addClass("red-style");
  });
});

// メゾットの連結（メゾットチェーン）
$(() => {
  $("#button3").click(() => {
    $("#addstyle2")
    .text("スタイルの追加")
    .addClass("blue-style");
  });
});


