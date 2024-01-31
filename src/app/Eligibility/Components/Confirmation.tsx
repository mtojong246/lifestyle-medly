import { Dispatch, SetStateAction } from "react";
import { UserType } from "../page";

export default function Confirmation({newUser, setNewUser}: {newUser: UserType, setNewUser: Dispatch<SetStateAction<UserType>>}) {
    return (
        <>
            <p className='text-[26px] sm:text-[36px] mb-8 sm:mb-5'><span className='text-maize'>Thank you</span> for taking the quiz!</p>
            <p className='text-[40px] sm:text-[48px] mb-10 sm:mb-5'>Welcome to the start of your weight loss journey!</p>
            <p className='text-lg sm:text-xl max-w-[600px] mx-auto'>Expect a call from our team with detailed information and guidance for the next steps for your weight loss goals.</p>
        </>
    )
}