//input type=date 日期的提示清除
$("input[name='bookingTime']").on("input",function(){
    if($(this).val().length>0){
        $(this).addClass("full");
    }else{
        $(this).removeClass();
    }
});