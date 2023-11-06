(function ($) {
    $.fn.customPhotoViewer = function () {
        return this.each(function () {
            var $imageViewer = $(this);
            var $pic = $imageViewer.find('.photo-box');
            var $thumbnail = $imageViewer.find('.thumbnail-box');

            $thumbnail.on({
                mouseover: function (){
                    $(this).find('img').css({
                        'filter': 'opacity(50%)'
                    });
                },
                mouseout: function() {
                    $(this).find('img').css({
                        'filter': 'opacity(100%)'
                    });
                },
                click: function(e) {
                    e.preventDefault();
                    var image = $(this).attr('href');
                    var $firstImage = $pic.find('img');
                    
                    $firstImage.attr('src', image);
                    $pic.removeClass('is-loading');
                    var $activeImg = $(this).find('img');
                    $activeImg.addClass('active');
                }
            })
        });
    };
}(jQuery));
