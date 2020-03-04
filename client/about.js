var React = require('react')

var About = React.createClass({
  render: function () {
    return <div className="about">
      <h1>Hexo博客控制台使用说明</h1>
      <p><strong>发布同名文章，有可能造成非预期的文章覆盖，请谨慎操作！</strong></p>
      <p>
        说明及注意事项
        <ol>
          <li>点击文章编辑器右上角的设置图标可设置文章日期、作者、分类、标签、描述等选项。</li>
          <li>文章描述将默认在主页的文章卡片中显示，字数限制为200字。</li>
          <li>文章标题如果含有英文引号，请在引号前加<code>&#x5c;</code>（如：<code>&#x5c;"文字&#x5c;"</code>）或改用中
文引号（如：“文字”）。</li>
          <li>文章正文段首缩进，请务必使用全角空格(　　)，否则可能造成文章渲染出错。</li>
          <li>若迫不得已，必须创建同名文章，请确保文章对应的文件名不同。</li>
          <li>文字默认左对齐，若想设置右对齐，请使用如下格式：<br></br>
            <code class='language-html' lang='html'>&lt;div style=&quot;text-align: right&quot;&gt;右对齐文字&lt;/div&gt;
            </code>
          </li>
          <li>若要向文章中插入图片，请先将图片上传至图床网站，然后使用如下markdown格式插入图片：<br></br>
            <code class='language-markdown' lang='markdown'>![图片描述](图片网址)
            </code>
            <br></br>下方是一个插入图片的例子：<br></br>
            <code class='language-markdown' lang='markdown'>![图片](http://some.site/img/123456.jpg)
            </code>
          <br></br>图床工具的使用请参考<a href="https://qsh5.cn/376.html">这篇</a>文章。
          </li>
          <li>文章默认由Markdown语言进行书写（<a href="https://www.runoob.com/markdown/md-tutorial.html">Markdown教程</a>），您可以下载使用<a href="https://typora.io/windows/typora-setup-x64.exe">Typora编辑器</a>进行文章的书写。写完文章
后，您只需将文章源代码粘贴至本平台的文章编辑器中即可。
          </li>
        </ol>
      </p>
    </div>
  }
})

module.exports = About

