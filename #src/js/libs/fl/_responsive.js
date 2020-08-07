/*stylelint-disable !responsive*/
let move_array = [];
$("*[data-move]") &&
  $.each($("*[data-move]"), function (a) {
    "" != $(this).data("move") && null != $(this).data("move") && ($(this).attr("data-move-index", a), (move_array[a] = { parent: $(this).parent(), index: $(this).index() }));
  });
function dynamic_adaptive() {
  let a = $(window).outerWidth();
  $.each($("*[data-move]"), function () {
    if ("" != $(this).data("move") && null != $(this).data("move")) {
      let b = $(this).data("move").split(","),
        c = $("." + b[0]),
        d = b[1],
        e = b[2];
      a < e
        ? !$(this).hasClass("js-move_done_" + e) && (0 < d ? $(this).insertAfter(c.find("*").eq(d - 1)) : $(this).prependTo(c), $(this).addClass("js-move_done_" + e))
        : $(this).hasClass("js-move_done_" + e) && (dynamic_adaptive_back($(this)), $(this).removeClass("js-move_done_" + e));
    }
  });
}
function dynamic_adaptive_back(a) {
  let b = a.data("move-index"),
    c = move_array[b],
    d = c.parent,
    e = c.index;
  0 < e ? a.insertAfter(d.find("*").eq(e - 1)) : a.prependTo(d);
}
$(window).resize(function () {
  dynamic_adaptive();
}),
  dynamic_adaptive();