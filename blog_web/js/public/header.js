// 出现搜索框
$('.iconsousuo').click(() => {
    $('.search input').removeClass('fadeOutUp').show().focus()
});
// 搜索框失焦10秒之后隐藏
$('.search input').blur(() => {
    setTimeout(() => {
        $('.search input').addClass('fadeOutUp')
    }, 3000)
});
// 修改主题色
$('.iconyueliang').click(() => {
    $('.bj_color ul').removeClass('fadeOutRight').show()
});
$('.bj_color ul').on('click', 'li', function() {
    let str = $(this)[0].innerHTML
    let start = str.indexOf('rgb')
    let end = str.indexOf(')') + 1
    $('html').css('background', str.substring(start, end))
})
$('.bj_color ul').mouseleave(() => {
    $('.bj_color ul').addClass('fadeOutRight')
})