export default function Options({...props}) {
    const options = [
        {text: 'What is Lifestyle Medly?', handler: props.actionProvider.handleWhatIsLifestyle, id: 1},
        {text: 'Do you offer Semaglutide or Tirzepatide injections?', handler: props.actionProvider.handleOffer, id: 2},
        {text: 'Can you provide more information on Semaglutide and Tirzepatide?', handler: props.actionProvider.handleInfo, id: 3},
        {text: 'Are your programs safe?', handler: props.actionProvider.handleSafety, id: 4},
        {text: 'Do you accept insurance?', handler: props.actionProvider.handleInsurance, id: 5},
        {text: 'How much do your programs cost?', handler: props.actionProvider.handleCost, id: 6},
        {text: 'How does telemedicine work?', handler: props.actionProvider.handleTelemedicine, id: 7},
        {text: 'How do I get started?', handler: props.actionProvider.handleGetStarted, id: 8},
        {text: 'Location and Contact', handler: props.actionProvider.handleContact, id: 9},
        {text: 'FAQs and Feedback', handler: props.actionProvider.handleFeedback, id: 10},
    ]

    const optionsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className='p-3 text-sm rounded bg-none border m-1 hover:bg-maize hover:border-maize hover:text-white'>{option.text}</button>
    ))

    return (
        <div className="flex flex-col justify-center items-end">{optionsMarkup}</div>
    )
}