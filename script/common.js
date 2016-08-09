/**
 * Created by qcxx on 2016/8/8.
 */
function addnums(){
    var num =document.getElementById("cartnumbers")
    var nums = parseInt(document.getElementById("cartnumbers").value);
       if(!isNaN(nums)){
           if(nums<1){
               nums = 1;
           }else{
               nums+=1;
           }
       }else{
           nums = 1;
       }
    
      /*num.value=nums;*/
    num.setAttribute("value",nums);
}
function addnumsss(){
    var number=parseInt($(this).prev().val());
    if(!isNaN(number)){
        if(number<1){
            number=1;
        }else{
            number+=1;
        }
    }else{
        number=1

    }
    $(this).prev().val(number);
}
function reducenumss(){
    var number=parseInt($(this).next().val());
    if(!isNaN(number)){
        if(number<2){
            number=1;
        }else{
            number-=1;
        }
    }else{
        number=1
    }
    $(this).next().val(number);
}
function reducenums(){
    var num =document.getElementById("cartnumbers")
    var nums = parseInt(document.getElementById("cartnumbers").value);
    if(!isNaN(nums)){
        if(nums<2){
            nums = 1;
        }else{
            nums-=1;
        }
    }else{
        nums=1;
    }
    num.value = nums ;
}
function addcatA(e){
    e.stopPropagation();
    var number = Number($("#cartnumbers").val());
    var productimg = $("#productimg"),
        imgsrc=productimg.children("img").attr("src"),
        x =productimg.offset().left + 30,
        y = productimg.offset().top - 10,
        X = $("#n_1").offset().left,
        Y = $("#n_1").offset().top;
        if($("#flydiv").length<=0){
            $("body").append('<div id="flydiv"><img src="'+imgsrc+'" width="50" height="50" /></div>');
        }
    var $obj=$('#flydiv');
    if(!$obj.is(':animated')){
        $obj.css({'left': x,'top': y}).animate({'left': X,'top': Y-80},500,function() {
            $obj.stop(false, false).animate({'top': Y-20,'opacity':0},500,function(){
                $obj.fadeOut(300,function(){
                    $obj.remove();
                    var num=Number($(".cartnums").text());
                    $(".cartnums").text(num+number);
                    $(".cartnums").show();
                });
            });
        });
    }

}