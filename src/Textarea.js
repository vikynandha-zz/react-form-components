define(['React'], function(React) {

    var ENTER_KEY = 13;

    var Textarea = React.createClass({

        getFormNode: function() {
            var element = this.getDOMNode();
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
                this.checkForCtrlEnter();
            }
        },

        render: function() {
            return (
                <textarea {...this.props} onKeyUp={this.handleKeyup}></textarea>
            );
        }

    });

    return Textarea;

});
