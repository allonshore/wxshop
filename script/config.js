require.config({
    baseUrl: "script/libs"

});

require(["swiper.min"],function(Swiper){
    var topSlider=new Swiper('.swiper-container',{
        sliderPerView:1,
        centeredSlides:true,
        autoplay:2000,
        loop:true,
        autoplayDisableOnInteraction:false
    })
});


//alert("加载成功！");