import { FaCheck } from "react-icons/fa6";
import { Dispatch, SetStateAction } from "react";
import { UserType } from "../page";

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

export default function PageFour({newUser, setNewUser}: {newUser: UserType, setNewUser: Dispatch<SetStateAction<UserType>>}) {

    const handleSelection = (value: string) => {
        setNewUser({
            ...newUser,
            conditions: newUser.conditions.map(cond => {
                if (cond.value === value) {
                    return { ...cond, isSelected: !cond.isSelected }
                } else {
                    return { ...cond }
                }
            })
        })
    }


    return (
        <div className='max-w-[600px] mx-auto'>
            <p className='text-xl mb-10'>Please check any of the following conditions that apply to you:</p>
            {newUser.conditions.map(condition => (
                <div onClick={() => handleSelection(condition.value)} className={`p-4 mb-5 flex justify-between items-center gap-10 border-2 rounded bg-maize/[.54] hover:bg-maize/[.8] hover:cursor-pointer border-gold text-gold font-medium text-left`}>
                    <p>{condition.label}</p>
                    <FaCheck className={`h-4 w-4 ${condition.isSelected ? 'opacity-100' : 'opacity-0'}`} />
                </div>
            ))}
        </div>
    )
}