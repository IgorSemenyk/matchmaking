import React from 'react';
import {setLogotype} from "../../../../redux/reducers/profileReducer";
import {connect} from "react-redux";
import {Field} from "redux-form";



let mapStateToProps = (state) => {
    return {

    }
};



class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
        this.fileInputData = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(this.fileInput.current);
        data.append('file', this.fileInputData.current.files[0]);
        this.props.setLogotype(data);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} encType={'multipart/form-data'} ref={this.fileInput}>
                <div>
                    <label>Set new logotype: </label>
                    <input type="file" name={'upload'} ref={this.fileInputData}/>
                    <button>Upload new logo</button>
                </div>
            </form>
        );
    }
}

export default connect(mapStateToProps, {setLogotype})(FileInput);