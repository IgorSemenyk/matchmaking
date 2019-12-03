import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import * as axios from "axios";

let mapStateToProps = (state) => {
    return {

    }
};

const adaptFileEventToValue = delegate =>
    e => delegate(e.target.files[0]);

const FileInputHTML = ({
                       input: {
                           value: omitValue,
                           onChange,
                           onBlur,
                           ...inputProps
                       },
                       meta: omitMeta,
                       ...props
                   }) =>
    <input
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
        type="file"
        {...inputProps}
        {...props}
    />;

let FileInputForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} >
            <label>
                Set new logotype:
                <Field component={FileInputHTML} name={'upload'} />
                <button>Set</button>
            </label>
        </form>
    )
};

class FileInput extends React.Component {
    onSubmit = (formData) => {
        console.log(formData);
        axios.post('https://anigo.com.ua/api/files', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(
            res => console.log(res)
        );
    };
    render() {
        return <FileInputRedux {...this.props} onSubmit={this.onSubmit} />
    }
}


const FileInputRedux = reduxForm({form: 'logotype'})(FileInputForm);

export default connect(mapStateToProps)(FileInput);

