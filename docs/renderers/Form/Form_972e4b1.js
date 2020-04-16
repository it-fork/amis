define('docs/renderers/Form/Form.md', function(require, exports, module) {

  module.exports = {
    "html": "<h2><a class=\"anchor\" name=\"form\" href=\"#form\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Form</h2><p>表单渲染器，主要用来展示或者接收用户输入后将数据提交给后端或者其他组件。</p>\n<div class=\"amis-preview\" style=\"height: 560px\"><script type=\"text/schema\" height=\"560\">{\n  \"type\": \"page\",\n  \"body\": {\n    \"type\": \"form\",\n    \"name\": \"sample1\",\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=1\",\n    \"controls\": [\n      {\n        \"name\": \"email\",\n        \"label\": \"Email\",\n        \"type\": \"email\",\n        \"description\": \"描述文字\"\n      },\n      {\n        \"name\": \"text\",\n        \"type\": \"text\",\n        \"label\": \"Text\"\n      }\n    ]\n  }\n}\n</script></div>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td><code>string</code></td>\n<td></td>\n<td><code>&quot;form&quot;</code> 指定为 Form 渲染器</td>\n</tr>\n<tr>\n<td>mode</td>\n<td><code>string</code></td>\n<td><code>normal</code></td>\n<td>表单展示方式，可以是：<code>normal</code>、<code>horizontal</code> 或者 <code>inline</code></td>\n</tr>\n<tr>\n<td>horizontal</td>\n<td><code>Object</code></td>\n<td><code>{&quot;left&quot;:&quot;col-sm-2&quot;, &quot;right&quot;:&quot;col-sm-10&quot;, &quot;offset&quot;:&quot;col-sm-offset-2&quot;}</code></td>\n<td>当 mode 为 <code>horizontal</code> 时有用，用来控制 label</td>\n</tr>\n<tr>\n<td>title</td>\n<td><code>string</code></td>\n<td><code>&quot;表单&quot;</code></td>\n<td>Form 的标题</td>\n</tr>\n<tr>\n<td>submitText</td>\n<td><code>String</code></td>\n<td><code>&quot;提交&quot;</code></td>\n<td>默认的提交按钮名称，如果设置成空，则可以把默认按钮去掉。</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 Dom 的类名</td>\n</tr>\n<tr>\n<td>controls</td>\n<td><code>Array</code> of <a href=\"/amis/docs/renderers/Form/FormItem\">FormItem</a></td>\n<td></td>\n<td>Form 表单项集合</td>\n</tr>\n<tr>\n<td>actions</td>\n<td><code>Array</code> of <a href=\"/amis/docs/renderers/Action\">Action</a></td>\n<td></td>\n<td>Form 提交按钮，成员为 Action</td>\n</tr>\n<tr>\n<td>messages</td>\n<td><code>Object</code></td>\n<td></td>\n<td>消息提示覆写，默认消息读取的是 API 返回的消息，但是在此可以覆写它。</td>\n</tr>\n<tr>\n<td>messages.fetchSuccess</td>\n<td><code>string</code></td>\n<td></td>\n<td>获取成功时提示</td>\n</tr>\n<tr>\n<td>messages.fetchFailed</td>\n<td><code>string</code></td>\n<td></td>\n<td>获取失败时提示</td>\n</tr>\n<tr>\n<td>messages.saveSuccess</td>\n<td><code>string</code></td>\n<td></td>\n<td>保存成功时提示</td>\n</tr>\n<tr>\n<td>messages.saveFailed</td>\n<td><code>string</code></td>\n<td></td>\n<td>保存失败时提示</td>\n</tr>\n<tr>\n<td>wrapWithPanel</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否让 Form 用 panel 包起来，设置为 false 后，actions 将无效。</td>\n</tr>\n<tr>\n<td>panelClassName</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>panel的类名。</td>\n</tr>\n<tr>\n<td><a href=\"#api\">api</a></td>\n<td><a href=\"/amis/docs/renderers/Types#api\">Api</a></td>\n<td></td>\n<td>Form 用来保存数据的 api。</td>\n</tr>\n<tr>\n<td><a href=\"#initapi\">initApi</a></td>\n<td><a href=\"/amis/docs/renderers/Types#api\">Api</a></td>\n<td></td>\n<td>Form 用来获取初始数据的 api。</td>\n</tr>\n<tr>\n<td>interval</td>\n<td><code>number</code></td>\n<td><code>3000</code></td>\n<td>刷新时间(最低 3000)</td>\n</tr>\n<tr>\n<td>silentPolling</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>配置刷新时是否显示加载动画</td>\n</tr>\n<tr>\n<td>stopAutoRefreshWhen</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>通过<a href=\"/amis/docs/renderers/Form/Types#表达式\">表达式</a> 来配置停止刷新的条件</td>\n</tr>\n<tr>\n<td><a href=\"#initasyncapi\">initAsyncApi</a></td>\n<td><a href=\"/amis/docs/renderers/Types#api\">Api</a></td>\n<td></td>\n<td>Form 用来获取初始数据的 api,与 initApi 不同的是，会一直轮训请求该接口，直到返回 finished 属性为 true 才 结束。</td>\n</tr>\n<tr>\n<td>initFetch</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>设置了 initApi 或者 initAsyncApi 后，默认会开始就发请求，设置为 false 后就不会起始就请求接口</td>\n</tr>\n<tr>\n<td>initFetchOn</td>\n<td><code>string</code></td>\n<td></td>\n<td>用表达式来配置</td>\n</tr>\n<tr>\n<td>initFinishedField</td>\n<td><code>string</code></td>\n<td><code>finished</code></td>\n<td>设置了 initAsyncApi 后，默认会从返回数据的 data.finished 来判断是否完成，也可以设置成其他的 xxx，就会从 data.xxx 中获取</td>\n</tr>\n<tr>\n<td>initCheckInterval</td>\n<td><code>number</code></td>\n<td><code>3000</code></td>\n<td>设置了 initAsyncApi 以后，默认拉取的时间间隔</td>\n</tr>\n<tr>\n<td>schemaApi</td>\n<td><a href=\"/amis/docs/renderers/Types#api\">Api</a></td>\n<td></td>\n<td><code>已不支持</code>，请改用 controls 里面放置 Service 渲染器实现</td>\n</tr>\n<tr>\n<td><a href=\"#asyncapi\">asyncApi</a></td>\n<td><a href=\"/amis/docs/renderers/Types#api\">Api</a></td>\n<td></td>\n<td>设置此属性后，表单提交发送保存接口后，还会继续轮训请求该接口，直到返回 <code>finished</code> 属性为 <code>true</code> 才 结束。</td>\n</tr>\n<tr>\n<td>checkInterval</td>\n<td><code>number</code></td>\n<td>3000</td>\n<td>轮训请求的时间间隔，默认为 3 秒。设置 <code>asyncApi</code> 才有效</td>\n</tr>\n<tr>\n<td>finishedField</td>\n<td><code>string</code></td>\n<td><code>&quot;finished&quot;</code></td>\n<td>如果决定结束的字段名不是 <code>finished</code> 请设置此属性，比如 <code>is_success</code></td>\n</tr>\n<tr>\n<td>submitOnChange</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>表单修改即提交</td>\n</tr>\n<tr>\n<td>submitOnInit</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>初始就提交一次</td>\n</tr>\n<tr>\n<td>resetAfterSubmit</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>提交后是否重置表单</td>\n</tr>\n<tr>\n<td>primaryField</td>\n<td><code>string</code></td>\n<td><code>&quot;id&quot;</code></td>\n<td>设置主键 id, 当设置后，检测表单是否完成时（asyncApi），只会携带此数据。</td>\n</tr>\n<tr>\n<td>target</td>\n<td><code>string</code></td>\n<td></td>\n<td>默认表单提交自己会通过发送 api 保存数据，但是也可以设定另外一个 form 的 name 值，或者另外一个 <code>CRUD</code> 模型的 name 值。 如果 target 目标是一个 <code>Form</code> ，则目标 <code>Form</code> 会重新触发 <code>initApi</code>，api 可以拿到当前 form 数据。如果目标是一个 <code>CRUD</code> 模型，则目标模型会重新触发搜索，参数为当前 Form 数据。当目标是 <code>window</code> 时，会把当前表单的数据附带到页面地址上。</td>\n</tr>\n<tr>\n<td>redirect</td>\n<td><code>string</code></td>\n<td></td>\n<td>设置此属性后，Form 保存成功后，自动跳转到指定页面。支持相对地址，和绝对地址（相对于组内的）。</td>\n</tr>\n<tr>\n<td>reload</td>\n<td><code>string</code></td>\n<td></td>\n<td>操作完后刷新目标对象。请填写目标组件设置的 name 值，如果填写为 <code>window</code> 则让当前页面整体刷新。</td>\n</tr>\n<tr>\n<td>autoFocus</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否自动聚焦。</td>\n</tr>\n<tr>\n<td>canAccessSuperData</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>指定是否可以自动获取上层的数据并映射到表单项上</td>\n</tr>\n<tr>\n<td>persistData</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>指定表单是否开启本地缓存</td>\n</tr>\n<tr>\n<td>clearPersistDataAfterSubmit</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>指定表单提交成功后是否清除本地缓存</td>\n</tr>\n<tr>\n<td>name</td>\n<td><code>string</code></td>\n<td></td>\n<td>设置一个名字后，方便其他组件与其通信</td>\n</tr>\n</tbody>\n</table>\n<p>表单项都是通过 controls 设置的，类型是数组，成员主要是<a href=\"/amis/docs/renderers/Form/FormItem\">FormItem</a>，默认一行一个（当然 form 是 inline 模式时例外），如果想一行多个，可以将多个<a href=\"/amis/docs/renderers/Form/FormItem\">FormItem</a>放在一个 <a href=\"/amis/docs/renderers/Form/Group\">Group</a> 里面。</p>\n<div class=\"amis-preview\" style=\"height: 560px\"><script type=\"text/schema\" height=\"560\" scope=\"body\">{\n  \"type\": \"form\",\n  \"name\": \"sample2\",\n  \"controls\": [\n    {\n      \"type\": \"text\",\n      \"name\": \"test\",\n      \"label\": \"Label\",\n      \"placeholder\": \"Placeholder\"\n    },\n\n    {\n      \"type\": \"divider\"\n    },\n\n    {\n      \"type\": \"group\",\n      \"controls\": [\n        {\n          \"type\": \"text\",\n          \"name\": \"test1\",\n          \"label\": \"Label\",\n          \"placeholder\": \"Placeholder\"\n        },\n\n        {\n          \"type\": \"text\",\n          \"name\": \"test2\",\n          \"label\": \"Label\",\n          \"placeholder\": \"Placeholder\"\n        }\n      ]\n    }\n  ]\n}\n</script></div>\n<p>水平模式的 Form 也支持 <a href=\"/amis/docs/renderers/Form/Group\">Group</a> 展现。</p>\n<div class=\"amis-preview\" style=\"height: 630px\"><script type=\"text/schema\" height=\"630\" scope=\"body\">{\n  \"type\": \"form\",\n  \"mode\": \"horizontal\",\n  \"name\": \"sample3\",\n  \"controls\": [\n    {\n      \"type\": \"text\",\n      \"name\": \"test\",\n      \"label\": \"Label\",\n      \"placeholder\": \"Placeholder\"\n    },\n\n    {\n      \"type\": \"divider\"\n    },\n\n    {\n      \"type\": \"group\",\n      \"controls\": [\n        {\n          \"type\": \"text\",\n          \"name\": \"test1\",\n          \"label\": \"Label\",\n          \"placeholder\": \"Placeholder\"\n        },\n\n        {\n          \"type\": \"text\",\n          \"name\": \"test2\",\n          \"label\": \"Label\",\n          \"placeholder\": \"Placeholder\"\n        }\n      ]\n    },\n\n    {\n      \"type\": \"divider\"\n    },\n\n    {\n      \"type\": \"group\",\n      \"controls\": [\n        {\n          \"type\": \"text\",\n          \"name\": \"test3\",\n          \"label\": \"Label\",\n          \"placeholder\": \"Placeholder\"\n        },\n\n        {\n          \"inline\": true,\n          \"type\": \"text\",\n          \"name\": \"test4\",\n          \"label\": \"Label\",\n          \"placeholder\": \"Placeholder\"\n        }\n      ]\n    },\n\n    {\n      \"type\": \"divider\"\n    },\n\n    {\n      \"type\": \"group\",\n      \"controls\": [\n        {\n          \"type\": \"text\",\n          \"name\": \"test3\",\n          \"label\": \"Label\",\n          \"inline\": true,\n          \"labelClassName\": \"col-sm-2\",\n          \"placeholder\": \"Placeholder\"\n        },\n\n        {\n          \"inline\": true,\n          \"type\": \"text\",\n          \"name\": \"test4\",\n          \"label\": \"Label\",\n          \"placeholder\": \"Placeholder\"\n        }\n      ]\n    }\n  ]\n}\n</script></div>\n<h3><a class=\"anchor\" name=\"%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E\" href=\"#%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>接口说明</h3><p>开始之前请你先阅读<a href=\"/amis/docs/renderers/api\">整体要求</a>。</p>\n<h4><a class=\"anchor\" name=\"initapi\" href=\"#initapi\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>initApi</h4><p>可以用来初始化表单数据。</p>\n<p><strong>发送</strong></p>\n<p>默认不携带任何参数，可以在上下文中取变量设置进去。</p>\n<p><strong>响应</strong></p>\n<p> 要求返回的数据 data 是对象，不要返回其他格式，且注意层级问题，data 中返回的数据正好跟 form 中的变量一一对应。</p>\n<pre><code> {\n   <span class=\"hljs-attribute\">status</span>: <span class=\"hljs-number\">0</span>,\n   msg: <span class=\"hljs-string\">''</span>,\n   data: {\n     a: <span class=\"hljs-string\">'123'</span>\n   }\n }\n</code></pre><p> 如果有个表单项的 name 配置成  a，initApi 返回后会自动填充 &#39;123&#39;。</p>\n<h4><a class=\"anchor\" name=\"api\" href=\"#api\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>api</h4><p> 用来保存表单结果。</p>\n<p> <strong>发送</strong></p>\n<p> 默认为 <code>POST</code> 方式，会将所有表单项整理成一个对象发送过过去。除此之外你开可以主动的获取以下信息。</p>\n<ul>\n<li><code>diff</code> 只会包含diff 结果</li>\n<li><p><code>prinstine</code> 原始数据。</p>\n<p>如: </p>\n</li>\n</ul>\n<pre><code class=\"lang-json\"> {\n   <span class=\"hljs-attr\">\"api\"</span>: {\n     <span class=\"hljs-attr\">\"method\"</span>: <span class=\"hljs-string\">\"post\"</span>,\n     <span class=\"hljs-attr\">\"url\"</span>: <span class=\"hljs-string\">\"/api/xxx/save\"</span>,\n     <span class=\"hljs-attr\">\"data\"</span>: {\n       <span class=\"hljs-attr\">\"modified\"</span>: <span class=\"hljs-string\">\"$$\"</span>,\n       <span class=\"hljs-attr\">\"diff\"</span>: <span class=\"hljs-string\">\"${diff}\"</span>,\n       <span class=\"hljs-attr\">\"origin\"</span>: <span class=\"hljs-string\">\"${prinstine}\"</span>\n     }\n   }\n }\n</code></pre>\n<p> <strong>响应</strong></p>\n<p> 如果 返回了 data 对象，且是对象，会把结果 merge 到表单数据里面。</p>\n<h4><a class=\"anchor\" name=\"initasyncapi\" href=\"#initasyncapi\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>initAsyncApi</h4><p> 这个接口的作用在于解决接口耗时比较长导致超时问题的情况，当配置此接口后，初始化接口的时候先请求 initApi 如果 initApi 接口返回了 data.finished 为 true，则初始化完成。如果返回为 false 则之后每隔 3s 请求 initAsyncApi，直到接口返回了 data.finished 为 true 才结束。 用这种机制的话，业务 api 不需要完全等待操作完成才输出结果，而是直接检测状态，没完成也直接返回，后续还会发起请求检测。</p>\n<p> 格式要求就是 data 是对象，且 有 finished 这个字段。返回的其他字段会被 merge 到表单数据里面。</p>\n<h5><a class=\"anchor\" name=\"asyncapi\" href=\"#asyncapi\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>asyncApi</h5><p> 保存同样也可以采用异步模式，具体请参考 initAsyncApi。</p>\n\n\n<div class=\"m-t-lg b-l b-info b-3x wrapper bg-light dk\">文档内容有误？欢迎大家一起来编写，文档地址：<i class=\"fa fa-github\"></i><a href=\"https://github.com/baidu/amis/tree/master/docs/renderers/Form/Form.md\">/docs/renderers/Form/Form.md</a>。</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "Form",
          "fragment": "form",
          "fullPath": "#form",
          "level": 2,
          "children": [
            {
              "label": "接口说明",
              "fragment": "%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E",
              "fullPath": "#%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E",
              "level": 3,
              "children": [
                {
                  "label": "initApi",
                  "fragment": "initapi",
                  "fullPath": "#initapi",
                  "level": 4
                },
                {
                  "label": "api",
                  "fragment": "api",
                  "fullPath": "#api",
                  "level": 4
                },
                {
                  "label": "initAsyncApi",
                  "fragment": "initasyncapi",
                  "fullPath": "#initasyncapi",
                  "level": 4
                }
              ]
            }
          ]
        }
      ],
      "level": 0
    }
  };

});
