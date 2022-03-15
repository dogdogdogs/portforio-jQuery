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

// 新しい要素の取得
$(() => {
  $("#button4").click(() => {
    $("<li>")
      .text("New Item")
      .appendTo(".list1");
  });
});

// リスト作成
$(() => {
  const $input = $("input");
  $input.focus();

  $(".listAdd").click(() => {
    $("<li>")
    // input要素の取得と入力された値の取得
      .text($input.val())
      .appendTo("ul");
    $input
      // これでボタンの後空になる
      .val("")
      // フォーカスが当たる
      .focus();
  });

  $("ul").click(e => {
    if (e.target.nodeName != "LI" || !confirm("Are you sure?")) {
      return;
    }
    e.target.remove();
  });
});