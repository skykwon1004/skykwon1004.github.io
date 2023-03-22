$(function () {
    var pageTitle = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07'
    ]

    var pageOption = {
        navigation: false,
        // direction: 'horizontal',
        anchors: [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07'
        ],

        //scrollingSpeed: 2000,

        afterRender: function () {
            $('.gnb li')
                .eq(0)
                .addClass('on');
            $('.section')
                .eq(0)
                .addClass('on');
            $('.page_number').text('01');
            $('.toTop').fadeOut()
        },
        onLeave: function (index, nextIndex, direction) {
            $('.gnb li')
                .eq(nextIndex - 1)
                .addClass('on')
                .siblings()
                .removeClass('on');
            $('.section')
                .eq(nextIndex - 1)
                .addClass('on')
                .siblings()
                .removeClass('on');
            $('.page_number').text(pageTitle[nextIndex - 1])

        },

        afterLoad: function (anchorLink, index) {
            //console.log(index);
            index == 1 ? $('.toTop').fadeOut() : $('.toTop').fadeIn();
        },
    }


    $('.main').pagepiling(pageOption);


    $('.mopen').on('click', function () {
        $(this).toggleClass('on');
        $('.cover').toggleClass('on');
        $('.header').toggleClass('on');
    });


    $('.cover li').on('click', function () {
        $('.cover').removeClass('on');
        $('.mopen').removeClass('on');
        $('.header').removeClass('on');

    });

    $('.cover').on('wheel', function (e) {
        e.stopPropagation();
    });



    // https://github.com/alvarotrigo/pagePiling.js#pagepilingjs 참고


})