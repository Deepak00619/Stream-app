import React from 'react';
import {connect} from 'react-redux';
//import streams from '../../apis/streams';
import {fetchStreams,editStream} from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component {
    componentDidMount(){
        this.props.fetchStreams(this.props.match.params.id);
    }
    
    onSubmit= (formValues) => {
       // console.log(formValues);
       this.props.editStream(this.props.match.params.id, formValues);
    }
    render(){
        //console.log(this.props)
            if(!this.props.stream){
                return <div>Loading...</div>
            }
            return(
                <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                 initialValues= {_.pick(this.props.stream, 'title', 'description')}
                 onSubmit={this.onSubmit} />
                </div>
            )
                 
    }
}

const metaStateToProps= ( state, ownProps ) => {
   return  { stream: state.streams[ownProps.match.params.id] }
}

export default connect(metaStateToProps, {fetchStreams,editStream})(StreamEdit);