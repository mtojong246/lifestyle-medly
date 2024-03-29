'use client';

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import { useState, MouseEvent } from 'react';

import { IoChatboxEllipses, IoClose} from "react-icons/io5";

import config from './assets/config';
import MessageParser from './assets/MessageParser';
import ActionProvider from './assets/ActionProvider';

export default function ChatBox() {
  const [ isChatOpen, setIsChatOpen ] = useState(false);

  const toggleChat = (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsChatOpen(!isChatOpen);
  }

  return (
    <div className="fixed sm:bottom-[40px] sm:right-[40px] bottom-[20px] right-[20px] z-10 text-right">
      {isChatOpen && 
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        placeholderText='Type your response'
      />}
      <button onClick={toggleChat} className='mt-[20px] p-4 rounded-full bg-maize hover:bg-gold'>
          {!isChatOpen ? <IoChatboxEllipses className='h-7 w-7 text-white' /> : <IoClose className='h-7 w-7 text-white'/>}
      </button>
      
    </div>
  );
}
