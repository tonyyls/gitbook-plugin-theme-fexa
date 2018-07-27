require(['gitbook', 'jquery'], function(gitbook, $) {

    function getRootPath() {
        var pathName = window.location.pathname.substring(1);
        var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
        if (webName == "") {
            return window.location.protocol + '//' + window.location.host;
        }
        else {
            return window.location.protocol + '//' + window.location.host + '/' + webName;
        }
    }

    function setConfig(){
        //标题
        var $title = $(".header-inner .title");
        $title.text(gitbook.state.config.title);

        //搜索框
        var $search = $('#book-search-input');
        var placeholder = gitbook.state.config.pluginsConfig["theme-fexa"]["search-placeholder"] || "输入关键字搜索"
        $search.find("input").attr("placeholder",placeholder);
        $search.append("<span id='searchBtn'>搜索</span>");
        $search.focus();
        $("#searchBtn").click((e)=>{ });

        //去掉gitbook-link
        $(".summary .gitbook-link").hide();
        $(".summary .divider").hide();
    }

    function toggleSearchFocus() {
        var $search = $('#book-search-input');

        $search.on('focus blur', 'input', function() {
            $search.toggleClass('focus');
        });
    }

    gitbook.events.on('start', function() {
        toggleSearchFocus();
    });

    gitbook.events.on('page.change', function() {
        setConfig();
    });
});
