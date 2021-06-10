$(".ab").on("click", function(){
        $(".links").css("visibility", "visible")
        $(".ab").css("visibility", "hidden")
        $(".cd").css("visibility", "visible")
 } )

 $(".cd").on("click", function(){
        $(".links").css("visibility", "hidden")
        $(".ab").css("visibility", "visible")
        $(".cd").css("visibility", "hidden")
 })
 $(".link").on("click", function(){
       $(".links").css("visibility", "hidden")
       $(".ab").css("visibility", "visible")
       $(".cd").css("visibility", "hidden")
})



 $(".ba").on("click", function(){
        $(".da").css("display", "block")
        $(".da").css("color", "white")
        $(".ba").css("display", "none")
        $(".links-2").css("display", "block")
        $("nav").css("background-color", "transparent")
        $("nav").css("box-shadow", "none")
        $("nav img").css("display", "none")
 })

 $(".da").on("click", function(){
        $(".ba").css("display", "flex")
        $(".da").css("display", "none")
        $(".links-2").css("display", "none")
        $(".links-2").css("display", "none")
        $("nav").css("background-color", "white")
        $("nav").css("box-shadow", "1px 1px 6px gray")
        $("nav img").css("display", "flex")
 })


 $(".link-2").on("click", function(){
        $(".links-2").css("display", "none")
        $("nav").css("background-color", "white")
        $("nav").css("box-shadow", "1px 1px 6px gray")
        $("nav img").css("display", "block")
        $(".ba").css("display", "flex")
        $(".da").css("display", "none")
 })