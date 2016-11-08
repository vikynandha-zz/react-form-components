var React = require('react');
var ReactDOM = require('react-dom');
var util = require('./util');

var Form = React.createClass({

    onSubmit: function() {
        ReactDOM.findDOMNode(this).submit();
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
        // In mobile, auto-focusing might look like too many transitions,
        // especially when the form is shown on a user action
        if(!this.props.preventAutoFocusOnMobile || !util.isMobile()) {
            var form = ReactDOM.findDOMNode(this);
            var autofocusField =
                    form.querySelector('[autofocus]:not([type="hidden"])') ||
                    form.querySelector('[data-autofocus]:not([type="hidden"])');

            if (!autofocusField) {
                autofocusField = form.querySelector(
                    'input:not([type="hidden"]), textarea, select, button'
                );
            }
            autofocusField.focus();
        }
    }

});

module.exports = Form;
