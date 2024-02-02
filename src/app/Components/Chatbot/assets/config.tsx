import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './Options';
import CloseOptions from './CloseOptions';
import IConfig from 'react-chatbot-kit/build/src/interfaces/IConfig';
import Avatar from './Avatar';
import UserAvatar from './UserAvatar';
import Pricing from './CustomMessages/Pricing';
import Social from './CustomMessages/Social';
import Started from './CustomMessages/Started';
import Faq from './CustomMessages/Faq';
import WhiteboardOne from './CustomMessages/WhiteboardOne';

const botName = 'LifeBot'


const config: IConfig = {
  initialMessages: [
    createChatBotMessage(`Hi there! I'm ${botName}, your friendly weight loss guide at Lifestyle Medly Clinic. Any questions? Let's chat!`, {}),
    createChatBotMessage(`To start, what is your name?`, {})
  ],
  customComponents: {
    header: () => <div className='bg-charcoal text-white p-4 rounded-t text-left font-medium'>LifeBot</div>,

    botAvatar: (props) => <Avatar {...props}/>,

    userAvatar: (props) => <UserAvatar {...props}/>
  },
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
  customMessages: {
    pricing: (props) => <Pricing {...props}/>,
    social: (props) => <Social {...props} />,
    started: (props) => <Started {...props}/>,
    faq: (props) => <Faq {...props} />,
    one: (props) => <WhiteboardOne {...props}/>,
  },
  widgets: [
    {
        widgetName: 'options',
        widgetFunc: (props) => <Options {...props}/>,
        props: {},
        mapStateToProps: [],
    },
    {
        widgetName: 'close-options',
        widgetFunc: (props) => <CloseOptions {...props}/>,
        props: {},
        mapStateToProps: [],
    }
  ]
};


export default config;