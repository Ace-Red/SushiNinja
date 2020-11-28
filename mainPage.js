document.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelectorAll('.slider');
    var init_slider = M.Slider.init(slider,{
        height:400,
        indicators:false,
        interval:4000
    });
});