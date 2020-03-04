
var React = require('react/addons')
var Link = require('react-router').Link
var SettingsCheckbox = require('./settings-checkbox')
var SettingsTextbox = require('./settings-textbox')

var divStyle = {
  whiteSpace: 'nowrap'
};

var Settings = React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function () {
    var LineNumbers = SettingsCheckbox({
      name: 'lineNumbers',
      enableOptions: {editor: {lineNumbers: true}},
      disableOptions: {editor: {lineNumbers: false}},
      label: '显示行号'
    });

    var SpellCheck = SettingsCheckbox({
      name: 'spellcheck',
      enableOptions: {editor: {inputStyle: 'contenteditable', spellcheck: true}},
      disableOptions: {editor: {inputStyle: null, spellcheck: false}},
      label: '拼写检查'
    });

    var AskImageFilename = SettingsCheckbox({
      name: 'askImageFilename',
      label: '是否每次都询问图片名称？',
      style: {width: '300px', display: 'inline-block'}
    });

    var OverwriteImages = SettingsCheckbox({
      name: 'overwriteImages',
      label: '是否强制覆盖同名图片？',
      style: {width: '425px', display: 'inline-block'}
    })

    var ImagePath = SettingsTextbox({
      name: 'imagePath',
      defaultValue: '/images',
      label: '图片文件存储目录'
    });

    var ImagePrefix = SettingsTextbox({
      name: 'imagePrefix',
      defaultValue: 'pasted-',
      label: '图片名称前缀'
    });

    return (
      <div className="settings" style={divStyle}>
        <h1>设置</h1>
        <p>
          您可以在这里，修改Hexo博客控制台和文章编辑器的相关配置信息。
        </p>
        <p>
          您需要为Hexo博客控制台设置一个安全的密码。
          {' '}<Link to='auth-setup'>点击这里设置您的账户信息</Link>
        </p>
        <hr />

        <h2>文章编辑器设置</h2>
        {LineNumbers}
        {SpellCheck}
        <hr />

        <h2>图片粘贴设置</h2>
        <p>
          您可以直接向Hexo博客控制台的文章编辑器中直接粘贴来自网页或其他地方的图片，但受网速影响很无法上传成功。您可以提前将图片上传至图床（PicGo），然后以Markdown格式插入图片。
        </p>
        {AskImageFilename}
        {OverwriteImages}
        {ImagePath}
        {ImagePrefix}
      </div>
    );
  }
})

module.exports = Settings
