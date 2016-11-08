var React = require('react');
var ReactDOM = require('react-dom');
var Textarea = require('../../src/Textarea');
var Form = require('../../src/Form');

ReactDOM.render(
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
        <div className="form-group">
            <button className="btn btn-primary" type="submit">Submit</button>
        </div>
    </Form>,
    document.getElementById('container')
);
