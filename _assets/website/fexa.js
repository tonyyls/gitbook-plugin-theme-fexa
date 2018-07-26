require(['gitbook', 'jquery'], function(gitbook, $) {

     //logo
    function setLogo() {
        var $logo = $(".header-inner .logo");
        var logoPath = gitbook.state.config.pluginsConfig["theme-fexa"]["logo"];
        if(logoPath){
            var pathName = location.pathname.split("/")[1];
            logoPath = location.href.substr(0,location.href.indexOf(pathName))+ logoPath.replace("./","");
            $logo.show();
            $logo.find("img").attr("src",logoPath);
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

        setLogo();
    });
});
