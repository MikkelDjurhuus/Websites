$(window).scroll(function () {
    let wScroll = $(this).scrollTop();
    console.log(wScroll);

    $('#foreground').css({
        'transform': 'translate(-50%,' + ( -50 - (wScroll / 10)) + '%)'
    });
    
    $('#logo').css({
        'transform': 'translate(0px,' + (wScroll / 2 -50) + '%)'
    });
    
    $('#background').css({
        'transform': 'translate(-50%,' + (wScroll / 3 -50) + '%)'
    });
})