import React from 'react';

class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(
            `Selected file - ${
                this.fileInput.current.files[0].name
            }`
        );
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Set new logotype:
                    <input type="file" ref={this.fileInput} onChange={this.handleSubmit} />
                </label>
            </form>
        );
    }
}

export default FileInput;