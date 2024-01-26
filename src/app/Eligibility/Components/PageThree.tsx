import { states } from "@/app/states";
import { RxChevronDown } from "react-icons/rx";
import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import { UserType} from "../page";


export default function PageThree({newUser, setNewUser, setIsDisabled, pageCount}: {newUser: UserType, setNewUser: Dispatch<SetStateAction<UserType>>, setIsDisabled: Dispatch<SetStateAction<boolean>>, pageCount: number}) {

    const handleSelect = (e:ChangeEvent<HTMLSelectElement>) => {
        setNewUser({
            ...newUser,
            state: e.target.value,
        })
    }

    useEffect(() => {
        if (pageCount === 2) {
            if (!newUser.state) {
                setIsDisabled(true);
            } else {
                setIsDisabled(false);
            }
        }
    }, [newUser.state])

    return (
        <div className='max-w-[600px] mx-auto'>
            <p className='text-xl mb-10'>Which state do you live in?</p>
            <select onChange={handleSelect} style={{color:`${newUser.state ? 'black' : '#999'}`}}  value={newUser.state} className={`rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54] arrow`} name='state'>
                {states.map((state, i) => (
                    <option key={i} value={state.value}>{state.label}</option>
                ))}
            </select>
        </div>
    )
}