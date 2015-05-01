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
                <input type="text" name="dummy"
                    placeholder="Dummy" className="form-control"/>
            </div>
            <div className="form-group hidden">
                <input type="hidden" name="hiddenField"
                    data-autofocus={true}
                    className="form-control"/>
            </div>
            <div className="form-group">
                <input type="text" name="title"
                    data-autofocus={true}
                    placeholder="Title" className="form-control"/>
            </div>
            <div className="form-group">
                <Textarea name="description" className="form-control"
                    placeholder="Description"/>
            </div>
        </Form>,
        document.getElementById('container')
    );

});
