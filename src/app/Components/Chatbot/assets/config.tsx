import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './Options';
import IConfig from 'react-chatbot-kit/build/src/interfaces/IConfig';

const botName = 'LifeBot'


const config: IConfig = {
  initialMessages: [
    createChatBotMessage(`Hi there! I'm ${botName}, your friendly weight loss guide at Lifestyle Medly Clinic. Any questions? Let's chat!`, {}),
    createChatBotMessage(`To start, what is your name?`, {})
  ],
  state: {
    name: '',
    email: '',
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  widgets: [
    {
        widgetName: 'options',
        widgetFunc: (props) => <Options {...props}/>,
        props: {},
        mapStateToProps: [],

    }
  ]
};


export default config;