define(['React'], function(React) {

    var Form = React.createClass({

        onSubmit: function() {
            this.getDOMNode().submit();
        },

        render: function() {
            return (
                <form {...this.props} onSubmit={this.props.onSubmit||this.onSubmit}>
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
