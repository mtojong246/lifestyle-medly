import React, { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';
import { IMessageOptions } from 'react-chatbot-kit/build/src/interfaces/IMessages';

const ActionProvider = ({ createChatBotMessage, setState, children }: { createChatBotMessage: (message: string, options: IMessageOptions) => void, setState:any, children:ReactElement[]  }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.', {})

    setState((prev:any) => ({
      ...prev,
      messages: [ ...prev.messages, botMessage ]
    }))
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;