# Gitbook theme for BingoPaaS Docs

![Image](https://github.com/tonyyls/gitbook-plugin-theme-fexa/blob/master/preview.gif)

## Usage

Add the theme to your book's configuration `book.json` or `book.js`:

```js
{
    "plugins": [
        "theme-fexa"
    ],
    "variables": {
        "themeFexa":{
            "nav":[
                {
                    "简易教程":"http://..."
                }
            ]
        },
    },
    "pluginsConfig": {
        "theme-fexa":{
            "search-placeholder":"输入关键字搜索",
            "logo":"./logo.png",
            "favicon": "./favicon.ico"
        }
    }
},
```

Install by command:

``` bash
gitbook install
```

## Recommand plugins

```js
plugins: [
    '-sharing',
    "-fontsettings",
    'back-to-top-button',
    "copy-code-button",
    "expandable-chapters",
    "heading-anchors",
    "theme-fexa"
    //...
]
```


Enjoy!