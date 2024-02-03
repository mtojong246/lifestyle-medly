import React, { ReactElement } from 'react';


const MessageParser = ({ children, actions }: { children: ReactElement, actions: any }) => {
  const parse = (message: string) => {
    if (message.includes('hello')) {
        actions.handleHello();
    } else if (children.props.state.messages[children.props.state.messages.length-1].message.includes('name')) {
        actions.handleName(message);
    } else if (children.props.state.messages[children.props.state.messages.length-1].message.includes('email')) {
        actions.handleEmail(message)
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;