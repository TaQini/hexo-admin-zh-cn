
var React = require('react')

var Rendered = React.createClass({
  propTypes: {
    text: React.PropTypes.string
  },
  render: function () {
    return this.transferPropsTo(
      <div className="post-content"
        dangerouslySetInnerHTML={{
          __html: this.props.text || '<h1 class="editor_no-content">您似乎还没有写任何内容...</h1>'
        }}/>)
  }
})

module.exports = Rendered;
