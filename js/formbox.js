//input type=date 日期的提示清除
$("input[name='bookingTime']").on("input",function(){
    if($(this).val().length<=0){
        $(this).addClass("empty");
    }else{
        // $(this).removeClass();
        $(this).addClass("full");
    }
});