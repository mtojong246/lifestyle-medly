'use client';

import { FaCheck } from "react-icons/fa6";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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

export default function PageFour({newUser, setNewUser, setIsDisabled, pageCount}: {newUser: UserType, setNewUser: Dispatch<SetStateAction<UserType>>, setIsDisabled: Dispatch<SetStateAction<boolean>>, pageCount: number}) {
    const [ none, setNone ] = useState(false);

    const handleSelection = (value: string) => {
        if (value === 'none') {
             if (!none === true) {
                setNewUser({
                    ...newUser,
                    conditions: newUser.conditions.map(cond => ({...cond, isSelected: false }))
                });
             }
             setNone(!none);
             
        } else {
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
            setNone(false);
        }
    }

    useEffect(() => {
        if (pageCount === 3) {
            if (none) {
                setIsDisabled(false)
            } else {
                let list: string[] = [];
                newUser.conditions.forEach(cond => {
                    if (cond.isSelected) {
                        list.push(cond.value)
                    }
                })
                if (list.length) {
                    setIsDisabled(false);
                } else {
                    setIsDisabled(true)
                }
                console.log(list)
            }
        } 
    }, [newUser.conditions, none])


    return (
        <div className='max-w-[600px] mx-auto'>
            <p className='text-xl mb-10'>Please check any of the following conditions that apply to you:</p>
            {newUser.conditions.map((condition,i) => (
                <div key={i} onClick={() => handleSelection(condition.value)} className={`p-4 mb-5 flex justify-between items-center gap-10 border-2 rounded ${condition.isSelected ? 'bg-maize/[.54] border-gold text-gold ' : 'bg-none border-charcoal text-charcoal'}  hover:bg-maize/[.8] hover:cursor-pointer  font-medium text-left`}>
                    <p>{condition.label}</p>
                    <FaCheck className={`h-4 w-4 ${condition.isSelected ? 'opacity-100' : 'opacity-0'}`} />
                </div>
            ))}
            <div onClick={() => handleSelection('none')} className={`p-4 mb-5 flex justify-between items-center gap-10 border-2 rounded ${none ? 'bg-maize/[.54] border-gold text-gold ' : 'bg-none border-charcoal text-charcoal'} hover:bg-maize/[.8] hover:cursor-pointer font-medium text-left`}>
                <p>None of the above</p>
                <FaCheck className={`h-4 w-4 ${none ? 'opacity-100' : 'opacity-0'}`} />
            </div>
        </div>
    )
}