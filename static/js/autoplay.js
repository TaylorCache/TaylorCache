document.addEventListener("DOMContentLoaded", function () {
    // 1. 初始化 bulmaCarousel
    var carousels = bulmaCarousel.attach('.carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        infinite: true
    });

    // 2. 自动播放下一组视频
    function autoSwitch() {
        setInterval(() => {
            carousels[0].next(); // 轮播到下一组
        }, 2000); // 每 5 秒自动切换
    }

    autoSwitch();

    // 3. 给每个视频加上标题
    document.querySelectorAll('.video-group .item video').forEach(video => {
        let title = document.createElement("h3");
        title.innerText = video.src.split('/').pop(); // 取文件名作为标题
        title.style.textAlign = "center";
        title.style.marginBottom = "5px";
        video.parentNode.insertBefore(title, video);
    });
});

