var React = require('react');
var ReactDOM = require('react-dom');
var ENTER_KEY = 13;

var Textarea = React.createClass({

  getFormNode: function() {
    var element = ReactDOM.findDOMNode(this);
    var tagname = 'form';
    do {
      if(element.nodeName.toLowerCase() === tagname) {
        return element;
      }
    } while((element = element.parentNode));

    return null;
  },

  checkForCtrlEnter: function(e) {
    if (e.ctrlKey && e.keyCode===ENTER_KEY) {
      var formNode = this.getFormNode();
      if (formNode) {
        var submitEvent = new Event('submit');
        formNode.dispatchEvent(submitEvent);
      } else {
        console.warn('No form element found around the textarea');
      }
    }
  },

  handleKeyup: function(e) {
    if (this.props.onKeyUp) {
      this.props.onKeyUp.apply(this, arguments);
    }
    if (!e.isDefaultPrevented()) {
      this.checkForCtrlEnter(e);
    }
  },

  render: function() {
    var {onKeyUp, ...otherProps} = this.props;
    return (
      <textarea onKeyUp={this.handleKeyup} {...otherProps}></textarea>
    );
  }

});

module.exports = Textarea;
