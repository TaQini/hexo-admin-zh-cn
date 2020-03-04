
var React = require('react/addons')
var bcrypt = require('bcrypt-nodejs')

var AdminYaml = React.createClass({
  getInitialState: function() {
    return {
      passwordHash: '$2a$10$L.XAIqIWgTc5S1zpvV3MEu7/rH34p4Is/nq824smv8EZ3lIPCp1su'
    }
  },

  componentDidUpdate: function (prevProps) {
    if (prevProps.password !== this.props.password) {
      var salt = bcrypt.genSaltSync(10)
      var hash = bcrypt.hashSync(this.props.password, salt)
      this.setState({passwordHash: hash})
    }
  },

  render: function() {

    var adminYaml = [
      '# hexo-admin authentification',
      'admin:',
      '  username: ' + this.props.username,
      '  password_hash: ' + this.state.passwordHash,
      '  secret: ' + this.props.secret
    ].join('\n')
    return (
      <pre>
        {adminYaml}
      </pre>
    )
  }
})

var AuthSetup = React.createClass({
  getInitialState: function() {
    return {
      username: 'username',
      password: 'password',
      secret: 'my super secret phrase'
    }
  },

  handleUsernameChange: function(e) {
    this.setState({username: e.target.value})
  },

  handlePasswordChange: function(e) {
    this.setState({password: e.target.value})
  },

  handleSecretChange: function(e) {
    this.setState({secret: e.target.value})
  },

  render: function() {
    return (
      <div className='authSetup'>
        <h1>认证信息设置</h1>
        <p>
          您可以通过在<code>_config.yml</code>文件中添加配置信息，来用密码保护Hexo博客控制台。您可以在此页面可以轻松进行设置。只需填写以下字段，然后将生成的文本部分复制并粘贴到您的配置文件中即可。
        </p>
        <div>
          <label>用户名:</label>
          <input type='text'
                 onChange={this.handleUsernameChange}
                 defaultValue={this.state.username}></input>
        </div>
        <div>
        <label>密码:</label>
          <p>密码将会加密存储在您的配置文件中。</p>
          <input type='text'
                 onChange={this.handlePasswordChange}
                 defaultValue={this.state.password}></input>
        </div>
        <div>
        <label>Secret:</label>
          <p>用作加密的附加信息，填写得越长越复杂越好。</p>
          <input type='text'
                 onChange={this.handleSecretChange}
                 defaultValue={this.state.secret}></input>
        </div>
        <h2>控制台配置信息</h2>
        <p>
          请将以下自动生成的配置代码复制并粘贴到您的<code>_config.yml</code>文件中。密码将在Hexo重启后生效。
        </p>
        <AdminYaml username={this.state.username}
                   password={this.state.password}
                   secret={this.state.secret}/>
      </div>
    );
  }
})

module.exports = AuthSetup
