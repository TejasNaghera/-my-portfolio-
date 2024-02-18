$(document).ready(function(){
    ////////////////empty/////////////////////////
    $(".R-btn").click(function(){
        //  $('.R-btn>i').css("display", "none")
        $(".ul-box").toggleClass("reyal")
        
        // $(".fa-solid ").css('display',' none')
    })
    $('.ul-box>li').click(function(){
       $('.ul-box').removeClass("reyal") 
    })
    ////////////////////////////////day and night/////////////////
    $('.switch,.slider ').click(function(){
        $('body').toggleClass("body2")
        // $(".sec-text").toggleClass("sec-nit-text")
        $('.wat').toggleClass("a-wat")
        $('.wat>.fa-brands').toggleClass('a-wat')
    })

    // $(".switch,.slider ").click(function(){
        
    //    })
    ///////////////////////////skill btn////////////////////
    $('.scroll-btn').click(function(){
        $('.skill').scrollTop(300)
       $(this).css( "display", "none")
    })
    
    
//////////////////////////////color/////////////////////////////////////////////////////////////////
////////////////aqua////////////////////////////
    $('.aqua-color').click(function(){
        $('.loga>h2,.auto-type,.abut-tital>h2,.may-dital>h2,.conta-chedig>h1>p').css('color','aqua')
       $('.bar samp,.cad>h2,.cad>p,.app').css("background","aqua")
    })
/////////////////////orangered////////////////////
    $('.orangered-color').click(function(){
        $('.loga>h2,.auto-type,.abut-tital>h2,.may-dital>h2,.conta-chedig>h1>p').css('color','orangered')
       $('.bar samp,.cad>h2,.cad>p,.app').css("background","orangered")
    })
//////////////////////yellow///////////////////////
    $('.yellow-color').click(function(){
        $('.loga>h2,.auto-type,.abut-tital>h2,.may-dital>h2,.conta-chedig>h1>p').css('color','yellow')
       $('.bar samp,.cad>h2,.cad>p,.app').css("background","yellow")
    })
//////////////////////blue///////////////////////
    $('.blue-color').click(function(){
        $('.loga>h2,.auto-type,.abut-tital>h2,.may-dital>h2,.conta-chedig>h1>p').css('color','blue')
         $('.bar samp,.cad>h2,.cad>p,.app').css("background","blue")
       
    })
////////////////////red/////////////////////////////
     $('.red-color').click(function(){
         $('.loga>h2,.auto-type,.abut-tital>h2,.may-dital>h2,.conta-chedig>h1>p').css('color','red')
        $('.bar samp,.cad>h2,.cad>p,.app').css("background","red")
     })

   /////////////////precatisa////////////
   $(".back").click(function(){
    $('.color').toggleClass("color2")
   })
})

var typed = new  Typed(".auto-type", {

    strings: ["frontEnd....", "web developer", "Youtuber"],
    
    typeSpeed: 150, backSpeed: 150,
    
    loop: true
    });