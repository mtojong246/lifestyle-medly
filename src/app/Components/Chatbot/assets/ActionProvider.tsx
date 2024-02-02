import React, { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';
import { createCustomMessage } from 'react-chatbot-kit';
import { IMessageOptions } from 'react-chatbot-kit/build/src/interfaces/IMessages';

const ActionProvider = ({ createChatBotMessage, setState, children }: { createChatBotMessage: (message: string, options: IMessageOptions) => void, setState:any, children:ReactElement[]  }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.', {})

    setState((prev:any) => ({
      ...prev,
      messages: [ ...prev.messages, botMessage ]
    }))
  };

  const handleName = (message:string) => {
    const botMessage = createChatBotMessage(`Hello ${message}! Next, what is your email?`, {});

    setState((prev:any) => ({
      ...prev,
      name: message,
      messages: [ ...prev.messages, botMessage ]
    }))
  }

  const handleEmail = (message:string) => {
    const botMessage = createChatBotMessage(`Great! Now, what can I help you with?`, {
      widget: 'options',
    });

    setState((prev:any) => ({
      ...prev,
      email: message,
      messages: [ ...prev.messages, botMessage ]
    }))
  }

  const handleWhatIsLifestyle = () => {
    const message = 
      createChatBotMessage(
      "We're a dedicated practice that believes everyone deserves access to effective weight loss solutions. We offer convenient telemedicine consultations and personalized programs that include FDA-approved medications like Semaglutide and Tirzepatide. Our approach combines medical intervention with lifestyle changes for transformative weight loss.", {}
    )

    const second = createChatBotMessage("Is there anything else I can help you with?", {
        delay: 3000,
        widget: "close-options"
      })
  

    setState((prev:any) => ({
      ...prev,
      messages: [ ...prev.messages, message, second ]
    }))
  }

  const handleOffer = () => {
    const message = createChatBotMessage(
      "Yes, we do! These medications have shown remarkable results in weight management when combined with lifestyle changes.", {}
    )

    const button = createCustomMessage('', 'one', {delay: 1000})

    const second = createChatBotMessage("Is there anything else I can help you with?", {
      delay: 3000,
      widget: "close-options"
    })

    setState((prev:any) => ({
      ...prev,
      messages: [ ...prev.messages, message, button, second ]
    }))
  }

  const handleInfo = () => {
    const message = createChatBotMessage(
      `
      Sure! Here's a quick overview:
      1. Semaglutide: Proven to reduce appetite, leading to an average weight loss of 14.9% over 68 weeks..
      2. Tirzepatide: A promising advancement in obesity treatment, offering hope for many. 
      `, {}
    )

    const button = createCustomMessage('', 'one', {delay: 1000})
    
    const second = createChatBotMessage("Is there anything else I can help you with?", {
      delay: 3000,
      widget: "close-options"
    })

    setState((prev:any) => ({
      ...prev,
      messages: [ ...prev.messages, message, button, second ]
    }))
  }

  const handleSafety = () => {
    const message = createChatBotMessage(
    'Absolutely! Our programs are designed and supervised by our licensed healthcare professionals to ensure safe medication administration, regular follow-ups, and personalized support.', {}
    )

    const second = createChatBotMessage("Is there anything else I can help you with?", {
      delay: 3000,
      widget: "close-options"
    })

    setState((prev:any) => ({
      ...prev,
      messages: [ ...prev.messages, message, second ]
    }))
  }

  const handleInsurance = () => {
    const message = createChatBotMessage(
      "We currently operate on a private-pay basis. While we don't directly accept payments from insurance providers, you can get an itemized bill from us, and then submit it to your insurance for reimbursement if needed.", {}
      )

      const second = createChatBotMessage("Is there anything else I can help you with?", {
        delay: 3000,
        widget: "close-options"
      })
  
      setState((prev:any) => ({
        ...prev,
        messages: [ ...prev.messages, message, second ]
      }))
  }

  const handleCost = () => {
    const message = createChatBotMessage(
      "Pricing varies based on individual needs.", {}
      )

      const button = createCustomMessage('', 'pricing', {
        delay: 1000,
      })

      const second = createChatBotMessage("Is there anything else I can help you with?", {
        delay: 3000,
        widget: "close-options"
      })
  
      setState((prev:any) => ({
        ...prev,
        messages: [ ...prev.messages, message, button, second ]
      }))
  }

  const handleTelemedicine = () => {
    const message = createChatBotMessage(
      "You'll have virtual consultations with our dedicated healthcare team through secure video conferencing.  We'll monitor your progress remotely and provide ongoing support from the comfort of your home.", {}
      )

      const second = createChatBotMessage("Is there anything else I can help you with?", {
        delay: 3000,
        widget: "close-options"
      })
  
      setState((prev:any) => ({
        ...prev,
        messages: [ ...prev.messages, message, second ]
      }))
  }

  const handleGetStarted = () => {
    const message = createChatBotMessage(
      "Take the first step towards a healthier you! Book a telemedicine appointment now.", {}
      )

      const button = createCustomMessage('', 'started', {delay: 1000})

      const second = createChatBotMessage("Is there anything else I can help you with?", {
        delay: 3000,
        widget: "close-options"
      })
  
      setState((prev:any) => ({
        ...prev,
        messages: [ ...prev.messages, message, button, second ]
      }))
  }

  const handleContact = () => {
    const message = createChatBotMessage(
      "Visit us at 441 US-130, East Windsor, NJ 08520 or reach out through: Office phone: 201-844-9062 or email us at: support@lifestylemedly.com. Or visit our official social media page", {}
      )

      const button = createCustomMessage('', 'social', { delay: 1000 })

      const second = createChatBotMessage("Is there anything else I can help you with?", {
        delay: 3000,
        widget: "close-options"
      })
  
      setState((prev:any) => ({
        ...prev,
        messages: [ ...prev.messages, message, button, second ]
      }))
  }

  const handleFeedback = () => {
    const message = createChatBotMessage(
      "Have questions? Check our FAQs or chat with our experts.", {}
      )

      const button = createCustomMessage('', 'faq', {delay: 1000})

      const second = createChatBotMessage("Is there anything else I can help you with?", {
        delay: 3000,
        widget: "close-options"
      })
  
      setState((prev:any) => ({
        ...prev,
        messages: [ ...prev.messages, message, button, second ]
      }))
  }

  const handleMore = () => {
    const message = createChatBotMessage("Great! What else can I help you with?", {
      widget: "options"
    })

    setState((prev:any) => ({
      ...prev,
      messages: [ ...prev.messages, message ]
    }))
  }

  const handleClose = () => {
    const message = createChatBotMessage(
      "Thank you for considering Lifestyle Medly Clinic! We're excited to assist you on your path to a healthier you. ", {}
      )

      const second = createChatBotMessage(
        'Book your consultation now and unlock a special welcome offer!', {}
      )

      const button = createCustomMessage('', 'started', {delay: 1000})
  
      setState((prev:any) => ({
        ...prev,
        messages: [ ...prev.messages, message, second, button ]
      }))
  }

  

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleWhatIsLifestyle,
            handleOffer,
            handleInfo,
            handleSafety,
            handleInsurance,
            handleCost,
            handleTelemedicine,
            handleGetStarted,
            handleContact,
            handleFeedback,
            handleClose,
            handleMore,
            handleName,
            handleEmail,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;