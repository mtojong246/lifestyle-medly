import { FaCheck } from "react-icons/fa6";

const conditions = [
    {
        value: 'Current pregnant or planning to become pregnant within the next year',
        isSelected: false,
    },
    {
        value: 'History of medullary thyroid cancer',
        isSelected: false,
    },
    {
        value: 'MEN (Multiple endocrine neoplasia) syndrome (family history)',
        isSelected: false,
    },
    {
        value: 'Active eating disorder (anorexia, bulimia, etc.)',
        isSelected: false,
    },
    {
        value: 'Substance abuse',
        isSelected: false,
    },
    {
        value: 'History of gastroparesis',
        isSelected: false,
    },
    {
        value: 'Type 1 diabetes',
        isSelected: false,
    }
]

export default function PageFour() {
    return (
        <div className='max-w-[600px] mx-auto'>
            <p className='text-xl mb-10'>Please check any of the following conditions that apply to you:</p>
            {conditions.map(condition => (
                <div className={`p-4 mb-5 flex justify-between items-center gap-10 border-2 rounded bg-maize/[.54] hover:bg-maize/[.8] hover:cursor-pointer border-gold text-gold font-medium text-left`}>
                    <p>{condition.value}</p>
                    <FaCheck className={`h-4 w-4 ${condition.isSelected ? 'block' : 'hidden'}`} />
                </div>
            ))}
        </div>
    )
}