var React = require('react');
var Form = React.createClass({

  onSubmit: function() {
    this.getDOMNode().submit();
  },

  render: function() {
    var {onSubmit, ...otherProps} = this.props;
    return (
      <form onSubmit={onSubmit||this.onSubmit} {...otherProps}>
      {this.props.children}
      </form>
    );
  },

  componentDidMount: function() {
    var form = this.getDOMNode();
    var autofocusField =
      form.querySelector('[autofocus]:not([type="hidden"]') ||
      form.querySelector('[data-autofocus]:not([type="hidden"]');

    if (!autofocusField) {
      autofocusField = form.querySelector(
        'input:not([type="hidden"]), textarea, select, button'
      );
    }
    autofocusField.focus();
  }

});

module.exports = Form;

