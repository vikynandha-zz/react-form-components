require.config({
    baseUrl: '../build/',
    paths: {
        'React': '../bower_components/react/react'
    }
});

require(['React', 'Textarea', 'Form'], function(React, Textarea, Form) {

    React.render(
        <Form action=".">
            <div className="form-group">
                <input type="text" name="title" defaultValue=""
                    className="form-control"/>
            </div>
            <div className="form-group">
                <Textarea name="description" className="form-control"/>
            </div>
        </Form>,
        document.getElementById('container')
    );

});
