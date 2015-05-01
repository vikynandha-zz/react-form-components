require.config({
    baseUrl: '../build/',
    paths: {
        'React': '../bower_components/react/react'
    }
});

require(['React', 'Textarea'], function(React, Textarea) {

    React.render(
        <form action=".">
            <div className="form-group">
                <input type="text" name="title" defaultValue=""
                    className="form-control"/>
            </div>
            <div className="form-group">
                <Textarea name="description" className="form-control"/>
            </div>
        </form>,
        document.getElementById('container')
    );

});
