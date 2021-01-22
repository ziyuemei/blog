// 文章列表分类tab
$(".content .left .tab a").click(function() {
    $(this).addClass("active").siblings().removeClass("active");
    $(".content .left .content_list .section").eq($(this).index()).show().siblings().hide();
});
// 分页器
/**
 * layout 参数说明：
 * 
 * total： 总条数
 * sizes: 显示每页条数选择框， TODO:pageSizes参数必填,否则无法生效
 * home： 首页按钮
 * prev： 上一页按钮
 * pager： 页码
 * last： 尾页按钮
 * next： 下一页按钮
 * jumper： 输入框跳转（包含事件：失去焦点，回车）触发
 * 
 * */
new Pagination({
    element: '.pages',
    type: 2,
    layout: 'prev, pager, next',
    // layout: 'prev, pager, next, total, jumper',
    pageIndex: 1,
    pageSize: 10,
    pageCount: 5,
    total: 70,
    singlePageHide: false,
    disabled: true,
    currentChange: function(index) {
        console.log(index);
    }
});