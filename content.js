$(document).ready(function() {
    setTimeout(() => {
        var iframe = document.getElementById('iframePlayer');
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        if (!iframeDocument) {
            throw "iframe couldn't be found in DOM.";
        }
        var video = iframeDocument.getElementById('home_video_html5_api');

        setTimeout(() => {
            $('.media').find('a')[0].click()
        }, video.duration*1000)
    }, 30*1000)
});
