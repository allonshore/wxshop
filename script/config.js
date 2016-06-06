require.config({
    baseUrl: "script/libs",
    paths: {
        "jquery": "",
        "swiper": "libs/swiper.min"
    }
});

require([swiper],function(){
    var topSlider=new Swiper('.swiper-container',{
        sliderPerView:1,
        centeredSlides:true,
        autoplay:2000,
        loop:true,
        autoplayDisableOnInteraction:false
    })
});


alert("加载成功！");