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
            var form = React.findDOMNode(this);
            var firstField = form.querySelector('input, textarea, select, button');
            firstField.focus();
        }

    });

    return Form;

});
