require.config({
<<<<<<< HEAD
    baseUrl: "script/libs"

});

require(["swiper.min"],function(Swiper){
=======
    baseUrl: "script/libs",
    paths: {
        "jquery": "",
        "swiper": "libs/swiper.min"
    }
});

require([swiper],function(){
>>>>>>> origin/master
    var topSlider=new Swiper('.swiper-container',{
        sliderPerView:1,
        centeredSlides:true,
        autoplay:2000,
        loop:true,
        autoplayDisableOnInteraction:false
    })
});


<<<<<<< HEAD
//alert("加载成功！");
=======
alert("加载成功！");
>>>>>>> origin/master
