$(function(){
    $('#search').on('click',function(e){
        $('.navbar .searchbox form').slideToggle();
        e.preventDefault()

    });
    $('.close').on('click',function(e){
        $('.navbar .searchbox form').slideToggle();
        e.preventDefault()
    });
});
