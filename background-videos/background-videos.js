const mim_video = {
    init: function(backgroundClass, playClass) {
        if (backgroundClass) {
            this.initBackground(backgroundClass);
        }
        if (playClass) {
            this.initPlay(playClass);
        }
    },
    /*** For background video ************************/
    initBackground: function(backgroundClass) {
        const $this = this;
        let count = 0;
        $this.backgroundEs = {};
        $('.' + backgroundClass).each(function() {
            count++;
            $(this).attr('data-background_id', 'background_video_' + count);

            $this.backgroundEs['background_video_' + count] = {
                video_wrap: $(this),
                video_frame: null
            }
            $this.createFrame($this.backgroundEs['background_video_' + count]);
        });

        $(window).resize(function() {
            $this.resize();
        });
        $this.resize();
    },
    createFrame: function(backgroundE) {
        let url = backgroundE.video_wrap.attr('data-video_link');
        if (url === '') {
            return false;
        } else {
            const video_wrap = backgroundE.video_wrap;
            const video_frame = document.createElement("iframe");
            const overlay = document.createElement("div");
            const overlayStyles = backgroundE.video_wrap.attr('data-overlay');
            url = this.buildUrl(url);

            overlay.setAttribute('class', 'overlay');
            overlay.setAttribute('style', overlayStyles);

            video_frame.src = url;
            backgroundE.video_wrap.append(video_frame);
            backgroundE.video_wrap.append(overlay);

            backgroundE.video_wrap = video_wrap;
            backgroundE.video_frame = video_frame;
        }
    },

    resize: function() {
        const $this = this;
        const w_width = $(window).width();
        const video_base_width = 960;
        const video_base_height = 540;

        for(const key in $this.backgroundEs) {
            const backgroundE = $this.backgroundEs[key]
            let max_height = backgroundE.video_wrap.height() + 60;
            let video_new_width = 0;
            let video_new_height = 0;
            let video_new_left = 0;
            const ratio = video_base_width / video_base_height;

            if (backgroundE.video_wrap.attr('data-video_type') === 'hero') {
                const header = $('#header');
                max_height = ($(window).height() < header.outerHeight()) ? header.outerHeight() : $(window).height();
            }

            video_new_width = w_width;
            video_new_height = video_new_width / ratio;
            max_height +=60;

            if (video_new_height < max_height) {
                video_new_height = max_height;
                video_new_width = video_new_height * ratio;
                video_new_left = -1 * (video_new_width - w_width) / 2;
            }

            let styles = "width: " + video_new_width + "px; height: " + video_new_height + "px;"
            if (0 !== video_new_left) {
                styles += 'left: ' + video_new_left + 'px;';
            }
            backgroundE.video_frame.setAttribute('style', styles);
        }
    },

    /*** For playing video ************************/
    initPlay: function(playClass) {
        const $this = this;
        $('.' + playClass).click(function() {
            const link = $(this).attr('data-video_link');
            $this.playVideo(link);
        })

    },
    playVideo: function(link) {
        const strings = link.split('?');
        const query_params = {
            'autoplay': 1
        };
        if (link.indexOf('youtube') !== -1) {

        } else if(link.indexOf('vimeo') !== -1) {
            query_params['buttons.watchlater'] = 'false';
            query_params['buttons.like'] = 'false';
            query_params['buttons.share'] = 'false';
            link = strings[0].replace('/vimeo.com/', '/player.vimeo.com/video/');
        }
        // Build query params
        if (typeof strings[1] != 'undefined') {
            const params = strings[1].split('&');
            for(let i = 0; i < params.length; i++) {
                const param = params[i].split('=');
                if (typeof param[1] != 'undefined') {
                    query_params[param[0]] = param[1];
                } else {
                    query_params[param[0]] = '';
                }
            }
        }

        link += '?' + $.param(query_params);

        const t = $('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen />').addClass('videoLightbox__embed').attr({
                src: link,
                frameborder: 0
            }),
            n = $('<button />').addClass('videoLightbox__closeButton').html('<span>Close <label>&times;</label></span>'),
            r = $('<div />').addClass('videoLightbox').append(t).append(n).appendTo('body').animate({
                opacity: 1
            }, {
                duration: 2000
            });
        n.click(function () {
            r.animate({
                opacity: 0
            }, {
                duration: 1000,
                complete: function () {
                    r.remove();
                }
            });
        });
    },

    /*** Build url video **************************/
    buildUrl: function(link) {
        const strings = link.split('?');
        const query_params = {
            'autoplay': 1
        };
        if (link.indexOf('youtube') !== -1) {
            query_params['controls'] = 0;
            query_params['showinfo'] = 0;
            query_params['autohide'] = 1;
            query_params['loop'] = 1;
        } else if(link.indexOf('vimeo') !== -1) {
            query_params['background'] = 1;
            query_params['title'] = 0;
            query_params['byline'] = 0;
            query_params['portrait'] = 0;
            query_params['autoplay'] = 1;
            query_params['loop'] = 1;
            link = strings[0].replace('/vimeo.com/', '/player.vimeo.com/video/');
        }
        // Build query params
        if (typeof strings[1] !== 'undefined') {
            const params = strings[1].split('&');
            for(let i = 0; i < params.length; i++) {
                const param = params[i].split('=');
                if (typeof param[1] !== 'undefined') {
                    query_params[param[0]] = param[1];
                } else {
                    query_params[param[0]] = '';
                }
            }
        }

        link += '?' + $.param(query_params);

        return link;
    }
}
mim_video.init();
