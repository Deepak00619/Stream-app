import React from 'react';
import {Field,reduxForm} from 'redux-form'; // Field is a class component


class StreamForm extends React.Component {
 
    renderError= ({error,touched}) =>{
        if(touched && error){
        return(
            <div className="ui error message">
            <div className="header">{error}</div>
            </div>
        )
        }
    }

    renderInput = ({input, label, meta}) =>{
       // console.log(meta)
       const className=`field ${meta.error && meta.touched?'error':''}`
        return (
            <div className= {className}>
            <label>{label}</label>
            <input {...input} autoComplete="off" />
            {this.renderError(meta)}
              </div>
        );
    }

    onSubmit= (formValues) => {
        this.props.onSubmit(formValues);
    }


    render(){
        //console.log(this.props)
        return(
            <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            className="ui form error">
            <Field name="title" 
            component={this.renderInput} 
            label="Enter Title" />
            <Field name="description"
             component={this.renderInput}
              label="Enter Description" 
              />
              <button className="ui button primary">Submit</button>
            </form>
        )
    }
    }

    const validate= formValues =>{
       // console.log(formValues)
        const error={};
        if(!formValues.title){
            error.title='You must enter title';
        }
        if(!formValues.description){
            error.description='You must enter description';
        }
        return error;
    }
export default reduxForm({
    form: 'streamForm',
    validate
}
)(StreamForm);

