//input type=date 日期的提示清除
$("input[type='datetime-local']").on("input",function(){
    if($(this).val().length<=0){
        $(this).addClass("empty");
    }else{
        // $(this).removeClass();
        $(this).addClass("full");
    }
});