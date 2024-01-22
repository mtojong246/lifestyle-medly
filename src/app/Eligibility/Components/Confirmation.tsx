import { Dispatch, SetStateAction } from "react";
import { User } from "../page";

export default function Confirmation({newUser, setNewUser}: {newUser: User, setNewUser: Dispatch<SetStateAction<User>>}) {
    return (
        <>
            <p className='text-[36px] mb-5'><span className='text-maize'>Thank you</span> for taking the quiz!</p>
            <p className='text-[48px] mb-5'>Welcome to the start of your weight loss journey!</p>
            <p className='text-xl max-w-[600px] mx-auto'>Expect a call from our team with detailed information and guidance for the next steps for your weight loss goals.</p>
        </>
    )
}