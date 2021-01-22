// 创建 swiper 实例
let mySwiper = null;
createSwiper()

function createSwiper() {
    mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        // effect:'coverflow',
        observer: true,
        observeParents: true,

        // 分页器
        pagination: {
            el: '.swiper-pagination',
            // hideOnClick: true,
        },

        // 自动循环
        autoplay: {
            delay: 1000 * 99999, //控制时间
            disableOnInteraction: false,
        },
    })
}