define(['React'], function(React) {

    var Form = React.createClass({

        render: function() {
            return (
                <form {...this.props}>
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

    return Form;

});
