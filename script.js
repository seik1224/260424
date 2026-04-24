// .opener를 클릭하면
$(".opener").on("click", function () {
  // .window에 .open이라는 class가 추가
  $(".window").addClass("open");
});

// .yes나 .no를 클릭하면
$(".yes, .no").on("click", function () {
  // .window에 .open이라는 class가 삭제
  $(".window").removeClass("open");
});
