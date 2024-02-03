export default function CloseOptions({...props}) {
    const options = [
        {text: 'Yes', handler: props.actionProvider.handleMore, id: 1},
        {text: 'No', handler: props.actionProvider.handleClose, id: 2},
    ]

    const optionsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className='p-3 text-sm rounded bg-none border m-1 hover:bg-maize hover:border-maize hover:text-white'>{option.text}</button>
    ))

    return (
        <div className="flex flex-col justify-center items-end">{optionsMarkup}</div>
    )
}