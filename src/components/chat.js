import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import fire from '../config';
import {Link} from 'react-router-dom';
import AddComment from './add';
import Comment from './comment';

class Chat extends React.Component {

  state = {comments: [], loader: true}

  updateDataBase = async () => {
    const comRef = await fire.database().ref("comments")
    comRef.on('value', async (snapshot)=>{
      let commentsList = await snapshot.val();
      let newCommentsList = [];
      for (let i in commentsList) {
        let url = commentsList[i].url ? commentsList[i].url : null
        newCommentsList.push({
          id: i,
          displayName: commentsList[i].displayName,
          text: commentsList[i].text,
          url: url
        })
      }
      this.setState({comments: newCommentsList, loader: false})
    })
  }

  componentDidMount () {this.updateDataBase();}

  componentDidUpdate(prevProps, prevState) {
    let result = document.body.scrollHeight
    window.scrollTo(0, result)
  }



  render() {
    return (
      <Fragment>
        <Link className='btn_change_username' to="/"> CHANGE USERNAME </Link>
          <div className='chat_views'>
              {this.state.loader && <p> LOADING ... </p>}
              {
                this.state.comments.map((v,i)=> {
                  return (
                    <div key={v.id}>
                    <Comment
                             displayName={v.displayName}
                             text={v.text}
                             url={v.url}
                    />
                    </div>
                  );
                })
              }
          </div>
            <AddComment  user={this.props.user} />
      </Fragment>
    );
  }
}

Chat.propTypes = {
  user: PropTypes.object
}


export default Chat;
