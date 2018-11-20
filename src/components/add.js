import React from 'react';
import PropTypes from 'prop-types';
import fire from '../config';



class AddComment extends React.Component {

  state = {text: '', file: null,}

  onHandleChange = (e) => {this.setState({[e.target.name]: e.target.value})}
  handleFile = (e) => {this.setState({file: e.target.files[0]})}

  onSubmitHandle = (e) => {
    e.preventDefault();
    let {text} = this.state;
    let {displayName} = this.props.user;
    let {file} = this.state;
    const itemsdb = fire.database().ref('comments');
    if (file && text) {
      const ref = fire.storage().ref('img/');
      const task = ref.child(file.name).put(file);
      task
          .then(snapshot => snapshot.ref.getDownloadURL())
          .then((url)=> {
              const item = {displayName, text, url}
              itemsdb.push(item)
              this.setState({text:'', file: null})
          })
      }else if (text){
        const item = {
            displayName,
            text,
            url: null
        }
        itemsdb.push(item)
        this.setState({text: ''})
      }
    }

  render() {
    return (
      <div className='add_comment'>
          <input
              onChange={this.onHandleChange}
              value={this.state.text}
              name='text' placeholder='....'
              className='input_text_comment'
              autoComplete='off'
              type='text' />
          <input style={{display: "none"}}
                 type='file'
                 onChange={this.handleFile}
                 ref={fileInput => this.fileInput = fileInput}/ >
          <span onClick={()=> this.fileInput.click()} className='btn_add_file'>image</span>
          <button onClick={this.onSubmitHandle} className='btn_add_comment' type='submit'> send </button>
      </div>
    );
  }
}

AddComment.propTypes = {
  user: PropTypes.object
}


export default AddComment;
