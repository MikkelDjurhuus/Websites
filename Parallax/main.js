$(window).scroll(function () {
    let wScroll = $(this).scrollTop();
    console.log(wScroll);

    if (wScroll < 600) {

        let initial = 'translateY(-50%)';
        $('#logo').css({
            'transform': initial + 'translateY(' + (wScroll / 2) + 'px)'
        });

        initial = 'translate(-50%, -50%)';
        $('#foreground').css({
            'transform': initial + 'translateY(' + (-wScroll) + 'px)'
        });

        $('#background').css({
            'transform': initial + 'translateY(' + (wScroll / 3) + 'px)'
        });
    }
})