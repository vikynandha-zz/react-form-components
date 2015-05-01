define(['React'], function(React) {

    var ENTER_KEY = 13;

    var Textarea = React.createClass({

        getFormNode: function() {
            var element = React.findDOMNode(this);
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
                    formNode.submit();
                } else {
                    console.warn('No form element found around the textarea');
                }
            }
        },

        render: function() {
            return (
                <textarea {...this.props} onKeyUp={this.checkForCtrlEnter}></textarea>
            );
        }

    });

    return Textarea;

});
