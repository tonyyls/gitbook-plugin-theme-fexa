var fs = require('fs');
var path = require('path');

module.exports = {
    website: {
        assets: './_assets/',
        js: [
            'fexa.js'
        ],
        css: [
            'fexa.css'
        ]
    },
    hooks: {
        finish: function () {
            var configOption = this.config.get('pluginsConfig')['theme-fexa'];
            var output = configOption ? (configOption.output || '_book') : '_book';
            var pathFile;

            // favicon
            pathFile = configOption && configOption.favicon;
            if (pathFile) {
                var faviconPath = path.join(process.cwd(), pathFile);
                var gitbookFaviconPath = path.join(process.cwd(), output, 'gitbook', 'images', 'favicon.ico');
                if (fs.existsSync(faviconPath)) {
                    fs.writeFileSync(gitbookFaviconPath, fs.readFileSync(faviconPath));
                }
            }

            // appleTouchIconPrecomposed152
            pathFile = configOption && configOption.appleTouchIconPrecomposed152;
            if (pathFile) {
                var appleTouchIconPrecomposed152 = path.join(process.cwd(), pathFile);
                var gitbookAppleTouchPath = path.join(process.cwd(), output, 'gitbook', 'images', 'apple-touch-icon-precomposed-152.png');
                if (fs.existsSync(appleTouchIconPrecomposed152)) {
                    fs.writeFileSync(gitbookAppleTouchPath, fs.readFileSync(appleTouchIconPrecomposed152));
                }
            }

            //logo
            pathFile = configOption && configOption.logo;
            if(pathFile){
                var logoPath = path.join(process.cwd(), pathFile);
                var pluginLogoPath = path.join(process.cwd(), output, 'gitbook','gitbook-plugin-theme-fexa',"logo.png");
                if (fs.existsSync(logoPath)) {
                    fs.writeFileSync(pluginLogoPath, fs.readFileSync(logoPath));
                }
            }
        }
    }
};