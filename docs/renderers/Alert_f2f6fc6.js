define('docs/renderers/Alert.md', function(require, exports, module) {

  module.exports = {
    "html": "<h2><a class=\"anchor\" name=\"alert\" href=\"#alert\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Alert</h2><p>用来做文字特殊提示，分为四类：提示类、成功类、警告类和危险类。</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;alert&quot;</code></td>\n<td>指定为 alert 渲染器</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 Dom 的类名</td>\n</tr>\n<tr>\n<td>level</td>\n<td><code>string</code></td>\n<td><code>info</code></td>\n<td>级别，可以是：<code>info</code>、<code>success</code>、<code>warning</code> 或者 <code>danger</code></td>\n</tr>\n<tr>\n<td>showCloseButton</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>是否显示关闭按钮</td>\n</tr>\n</tbody>\n</table>\n<div class=\"amis-preview\" style=\"height: 320px\"><script type=\"text/schema\" height=\"320\" scope=\"body\">{\n    \"type\": \"alert\",\n    \"body\": \"这是一段提示\",\n    \"level\": \"warning\"\n}\n</script></div>\n<p>可结合 <code>visibleOn</code> 用来做错误信息提示。</p>\n<div class=\"amis-preview\" style=\"height: 320px\"><script type=\"text/schema\" height=\"320\">{\n    \"type\": \"page\",\n    \"data\": {\n        \"errMsg\": \"这是错误提示详情\"\n    },\n    \"body\": {\n        \"type\": \"alert\",\n        \"visibleOn\": \"this.errMsg\",\n        \"body\": \"${errMsg}\",\n        \"level\": \"danger\",\n        \"showCloseButton\": true\n    }\n}\n</script></div>\n\n\n<div class=\"m-t-lg b-l b-info b-3x wrapper bg-light dk\">文档内容有误？欢迎大家一起来编写，文档地址：<i class=\"fa fa-github\"></i><a href=\"https://github.com/baidu/amis/tree/master/docs/renderers/Alert.md\">/docs/renderers/Alert.md</a>。</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "Alert",
          "fragment": "alert",
          "fullPath": "#alert",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
