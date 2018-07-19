import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';

import { getChatLog, getUsers } from './service';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    this.props.getChatLog();
    this.props.getUsers();
  }
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <div>
          {this.props.mappedMessages.map((messageObj) => (
            <div key={messageObj.id} className="message">
              {messageObj.message}
              <div className="userEmail">{messageObj.user.email}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  members: state.members,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog, getUsers }, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const messages = stateProps.messages;
  const members = stateProps.members;
  let mappedMessages = [];

  if (messages.length && members.length) {
    mappedMessages = messages.map((message) => {
      const member = members.find(member => member.id === message.userId);
      const newMessage = message;

      if (member) {
        newMessage.member = member;
      }

      return newMessage;
    });
  }

  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
   mappedMessages,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(App);
