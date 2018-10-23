(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{275:function(e,n,o){"use strict";var r=o(18),t=o.n(r),c=o(19),a=o.n(c),l=o(22),b=o.n(l),u=o(20),C=o.n(u),h=o(21),s=o.n(h),x=o(0),d=o.n(x),k=o(276),i=o.n(k),p=o(277),m=o.n(p),v=(o(278),function(e){function n(){return a()(this,n),C()(this,(n.__proto__||t()(n)).apply(this,arguments))}return s()(n,e),b()(n,[{key:"render",value:function(){var e=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),n=e.document,o=e.className;if("string"==typeof n){var r=new i.a.Renderer;r.table=function(e,n){return'<div class="grid-container"><table class="grid"><thead>'+e+"</thead><tbody>"+n+"</tbody></table></div>"},r.code=function(e,n){return'<pre><code class="hljs '+n+'">'+(!(!n||!m.a.getLanguage(n))?m.a.highlight(n,e).value:e)+"</code></pre>"},i.a.setOptions({renderer:r});var t=i()(n,{renderer:r});return d.a.createElement("div",{className:o,dangerouslySetInnerHTML:{__html:t}})}return d.a.createElement("span",null)}}]),n}(x.Component));n.a=v},323:function(e,n){e.exports='## 复选框 Checkbox\n\n\n\n### 基本用法\n```jsx\nimport { Cell, Checkbox } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell><Checkbox>普通</Checkbox></Cell>\n        <Cell><Checkbox defaultChecked>默认选中</Checkbox></Cell>\n        <Cell><Checkbox disabled>禁用</Checkbox></Cell>\n        <Cell><Checkbox defaultChecked disabled>选中且禁用</Checkbox></Cell>\n        <Cell className="agreement-box">\n          <Checkbox id="agreement" />\n          <label htmlFor="agreement">阅读并同意<a href="/#" onClick={(e) => { e.preventDefault(); alert(\'agree it\'); }}>《XXX条款》</a>中的相关规定</label>\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 按钮样式\n```jsx\nimport { Cell, Checkbox } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Checkbox.Group type="button">\n              <Checkbox value="0">选项一</Checkbox>\n              <Checkbox value="1">选项二</Checkbox>\n              <Checkbox value="2">选项三</Checkbox>\n            </Checkbox.Group>\n          }\n        >\n          普通\n        </Cell>\n\n        <Cell\n          description={\n            <Checkbox.Group type="button" defaultValue={[\'0\', \'1\']}>\n              <Checkbox value="0">选项一</Checkbox>\n              <Checkbox value="1">选项二</Checkbox>\n              <Checkbox value="2">选项三</Checkbox>\n            </Checkbox.Group>\n          }\n        >\n          指定默认值\n        </Cell>\n\n        <Cell\n          description={\n            <Checkbox.Group type="button">\n              <Checkbox value="0">选项一</Checkbox>\n              <Checkbox value="1">选项二</Checkbox>\n              <Checkbox value="2" disabled>选项三</Checkbox>\n            </Checkbox.Group>\n          }\n        >\n          禁用指定项\n        </Cell>\n\n        <Cell\n          description={\n            <Checkbox.Group type="button" shape="radius">\n              <Checkbox value="0">选项一</Checkbox>\n              <Checkbox value="1">选项二</Checkbox>\n              <Checkbox value="2">选项三</Checkbox>\n            </Checkbox.Group>\n          }\n        >\n          圆角\n        </Cell>\n\n        <Cell\n          description={\n            <Checkbox.Group type="button" shape="round">\n              <Checkbox value="0">选项一</Checkbox>\n              <Checkbox value="1">选项二</Checkbox>\n              <Checkbox value="2">选项三</Checkbox>\n            </Checkbox.Group>\n          }\n        >\n          椭圆角\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 块级样式\n```jsx\nimport { Checkbox } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className="block-box">\n        <Checkbox.Group block type="button">\n          <Checkbox value="0">选项一</Checkbox>\n          <Checkbox value="1">选项二</Checkbox>\n          <Checkbox value="2">选项三</Checkbox>\n        </Checkbox.Group>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 列表样式\n```jsx\nimport { Checkbox } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Checkbox.Group type="cell">\n          <Checkbox value="0">选项一</Checkbox>\n          <Checkbox value="1">选项二</Checkbox>\n          <Checkbox value="2" disabled>选项三（禁止选择）</Checkbox>\n        </Checkbox.Group>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 列表样式禁用状态\n```jsx\nimport { Checkbox } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Checkbox.Group disabled type="cell">\n          <Checkbox value="0">选项一</Checkbox>\n          <Checkbox value="1">选项二</Checkbox>\n          <Checkbox value="2">选项三</Checkbox>\n        </Checkbox.Group>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n#### Checkbox\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| theme | string | \'primary\' | 主题，可选值 `default`, `primary`, `info`, `success`, `warning`, `error` |\n| shape | string | - | 形状，可选值 `radius`, `round` | \n| type | string | - | 显示类型，可选值 `button`, `cell` |\n| value | string &#124; number | - | 值 |\n| checked | boolean | - | 当前是否选中 |\n| defaultChecked | boolean | - | 初始是否选中 |\n| disabled | boolean | false | 是否禁用 |\n| onChange | (checked: boolean) => void | - | 值变化时触发的回调函数 |\n| id | string | - | 方便外部带有for属性的label标签控制当前checkbox |\n\n#### Checkbox.Group\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| theme | string | \'primary\' | 主题，可选值 `default`, `primary`, `info`, `success`, `warning`, `error` |\n| shape | string | - | 形状，可选值 `radius`, `round` | \n| type | string | - | 显示类型，可选值 `button`, `cell` |\n| value | Array&lt;number &#124; string&gt; | [] | 选中值 |\n| defaultValue | Array&lt;number &#124; string&gt; | [] | 初始选中值 |\n| block | boolean | false | 是否为块级元素 |\n| disabled | boolean | false | 是否禁用 |\n| compact | boolean | false | 是否启用紧凑模式 |\n| onChange | (value: Array&lt;number &#124; string&gt;) => void | - | 值变化时触发的回调函数 |\n'},665:function(e,n,o){"use strict";o.r(n);var r=o(18),t=o.n(r),c=o(19),a=o.n(c),l=o(20),b=o.n(l),u=o(21),C=o.n(u),h=function(e){function n(){var e,r,c,l;a()(this,n);for(var u=arguments.length,C=Array(u),h=0;h<u;h++)C[h]=arguments[h];return r=c=b()(this,(e=n.__proto__||t()(n)).call.apply(e,[this].concat(C))),c.document=function(){return{document:o(323),className:"checkbox-page"}},l=r,b()(c,l)}return C()(n,e),n}(o(275).a);n.default=h}}]);