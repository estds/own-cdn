/**
 * Created by sjr on 2019/10/24.
 */

/*立即执行*/
$(function () {

    if ($('.navigation-box .sub-menu').length) {
        var subMenu = $('.main-navigation .sub-menu');
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
        });
    }
    var mainNavToggler = $('.menu-toggler');
    var subNavToggler = $('.main-navigation .sub-nav-toggler');
    mainNavToggler.on('click', function () {
        var Self = $(this);
        var menu = Self.closest('.header-navigation').find(Self.data('target'));
        $(menu).slideToggle();
        $(menu).toggleClass('showen');
        return false;
    });
    subNavToggler.on('click', function () {
        var Self = $(this);
        Self.parent().parent().children('.sub-menu').slideToggle();
        return false;
    });

    /*轮播*/
    TouchSlide({
        slideCell: "#slideBox",
        titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell: ".bd ul",
        effect: "leftLoop",
        delayTime: 800,
        interTime: 3000,
        autoPage: true,//自动分页
        autoPlay: true //自动播放
    });

    /*轮播 图片比例*/
    var sliderH = $('.slideBox').width() * 9 / 16;
    $('.slideBox').height(sliderH);
    $('.slideBox .bd img').css('min-height', sliderH)


    /*响应显示尺寸*/
    function setSize() {
        /*快速通道*/
        var fastLen = $('.fast-li-w').length;

        var time = $('.fast-li-w');
        var WW = 100 / fastLen;
        if ($(window).width() > 993) {
            time.css('width', WW + '%');
            /*会议简介*/
            $('.welcome-c').css('maxHeight', (sliderH - 36) + 'px');
            if ($('.cta-three__text').height() > (sliderH - 36)) {
                $('.cta-three__text .go-detail').show()
            }
        } else {
            if (fastLen > 1) {
                time.css({ width: '50%' });
                if (fastLen % 2 > 0) {
                    time.last().css({ width: '100%' })
                }
            } else {
                time.css('width', WW + '%');
            }
        }
    }
    setSize();

    /*倒计时*/
    if ($('.js-countdown').length) {
        setInterval(function () {
            t($('.js-countdown'), $('.js-countdown').attr('date-time'));
        }, 1000)
    }
    // 产品展区
    TouchSlide({
        slideCell: "#tabBox1",
        endFun: function (i) { //高度自适应
            var bd = document.getElementById("tabBox1-bd");
            bd.parentNode.style.height = bd.children[i].children[0].offsetHeight + "px";
            if (i > 0) bd.parentNode.style.transition = "200ms";//添加动画效果
        }

    });
    // 7:5
    var picH = $('.blog-one__image').width() * 5 / 7;
    $('.blog-one__image').height(picH);
    $('.blog-one__image img').css('min-height', picH);
    // 4:3图片响应
    function pic43(ele) {
        var eleW = ele.width();
        var eleH = eleW * 3 / 4;
        ele.height(eleH);
        ele.find('img').css('min-height', eleH);
    }

    pic43($('.companyList .company-item .pic-box'))
    pic43($('.productList .tabBox .pic-box'))
    //  pic43($('.blog-one__image'))




})

/*所有数据加载完毕执行*/
$(window).load(function () {
    /*footer*/
    $('.footer-space').height($('footer').height());

})

