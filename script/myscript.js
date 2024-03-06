$(function(){

    //banner
    $(".close1").click(function(){
        $(".banner").slideUp();
    })
    $(".b_2 span").click(function(){
        $(this).toggleClass("plus")
    })

    //custom
    $(".quick_select > li > a").click(function(){
        $(".quick_select_sub").toggleClass("on")
    })

    //menu  
    $(".main > li").hover(function(){
        $(this).find(".sub").stop().show();
    }, function(){
        $(this).find(".sub").stop().hide();
    })

    //img_slide
    $(".fade").slick({
        autoplay:true,   //슬라이드 자동 실행 여부 기본값 false로 자동 슬라이드 안 됨
        autoplaySpeed:3000,    //슬라이드 속도 (1000이 1초)
        dots:true,       //버튼 여부 기본값 false로 안 나타남
        arrows:false,    //앞 뒤 이동 화살표 여부 기본값 true로 버튼 표시됨
        slidesToShow:1,    //한 번에 노출될 이미지 갯수
        slidesToScroll:1,  //앞 뒤 화살표 한 번 누를 때 이동될 이미지 갯수 (한 번에 이동될 이미지 갯수 증가하면 버튼 객수 줄어든)
        infinite:true, // 무한 반복 여부 기본값이 true로 계속 반복됨
        rows:1,     //이미지를 몇 줄로 표시할지 여부 
        fade:true, //이미지가 페이드 효과로 슬라이드 됨
        pauseOnFocus:true,     //마우스 클릭 시 슬라이드 멈춤 기본값 true
        pauseOnHover:true , // 마우스 호버시 슬라이드 멈춤 기본값 true
        pauseOnDotsHover:true,   //마우스를 버튼에 호버시 슬라이드 멈춤 기본값 false
        // responsive:[
        //     {
        //         breakpoint:390,          //화면 사이즈 (px 안붙임)
        //         settings:{
        //             slidesToShow:2,
        //     slidesToScroll:2,
        //     } //settings
        //     }
        //     ] //responsive
    })
    
    
    
    
})//jquery

//header scroll
$(window).scroll(function () {
    var top = $(window).scrollTop();

    if (top > 60) {
        $('.quick').css({"display":"none"});
        $(".header").css({"top":"0px", "height":"110px", "border-bottom":"1px solid #ddd"})
    }else{
        $('.quick').css({"display":"flex"});
        $(".header").css({"top":"60px", "height":"140px", "border-bottom":"none"})
    }
})
