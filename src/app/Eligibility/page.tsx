'use client';

import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import PageOne from "./Components/PageOne";
import PageTwo from "./Components/PageTwo";
import PageThree from "./Components/PageThree";
import PageFour from "./Components/PageFour";
import Confirmation from "./Components/Confirmation";
import { useState, MouseEvent, useEffect, useContext } from "react";
import { GlobalContext } from "../context/context";
import { addUser, updateUser } from "../api/firebase";
import { useRouter } from "next/navigation";

export interface UserType {
    id: string,
    first_name: string,
    last_name: string,
    gender: string,
    date_of_birth: string,
    age: number,
    email: string,
    phone_number: string,
    waist_size: number,
    weight: number,
    height_feet: number,
    height_inches: number,
    bmi: number,
    state: string,
    conditions: {
        label: string,
        value: string,
        isSelected: boolean,
    }[],
}

const defaultUser = {
    id: '',
    first_name: '',
    last_name: '',
    gender: '',
    date_of_birth: '',
    age: 0,
    email: '',
    phone_number: '',
    waist_size: 0,
    weight: 0,
    height_feet: 0,
    height_inches: 0,
    bmi: 0,
    state: '',
    conditions: [
        {
            label: 'Current pregnant or planning to become pregnant within the next year',
            value: 'pregnancy',
            isSelected: false,
        },
        {
            label: 'History of medullary thyroid cancer',
            value: 'cancer',
            isSelected: false,
        },
        {
            label: 'MEN (Multiple endocrine neoplasia) syndrome (family history)',
            value: 'men',
            isSelected: false,
        },
        {
            label: 'Active eating disorder (anorexia, bulimia, etc.)',
            value: 'eating',
            isSelected: false,
        },
        {
            label: 'Substance abuse',
            value: 'substance',
            isSelected: false,
        },
        {
            label: 'History of gastroparesis',
            value: 'gastroparesis',
            isSelected: false,
        },
        {
            label: 'Type 1 diabetes',
            value: 'diabetes',
            isSelected: false,
        }
    ]
}

export default function Eligibility() {
    const [ newUser, setNewUser ] = useState<UserType>(defaultUser);
    const [ isDisabled, setIsDisabled ] = useState(false);
    const { pageCount, nextPage, previousPage } = useContext(GlobalContext);
    const router = useRouter();
    // const [ pageCount, setPageCount ] = useState(0);

    useEffect(() => {
        window.scrollTo(0,0)
    }, [pageCount]);

    useEffect(() => {
        const fetchUser = async () => {
            const existingUser = localStorage.getItem('user');
            if (existingUser) {
                const parsedUser: UserType = JSON.parse(existingUser);
                setNewUser(parsedUser);
            } else {
                try {
                    const userData = await addUser(defaultUser);
                    setNewUser(userData as UserType);
                    localStorage.setItem('user', JSON.stringify(userData));
                } catch (err:any) {
                    console.log(err)
                }
            }
        }
        fetchUser();
        
    }, []);
    

    const handleSave = async (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const existingUser = localStorage.getItem('user');
        if (existingUser) {
            try {
                await updateUser(newUser, newUser.id);
                if (pageCount !== 4) {
                    localStorage.setItem('user', JSON.stringify(newUser));
                } else {
                    localStorage.removeItem('user');
                }
                
            } catch (err:any) {
                console.log(err)
            }
        } 
    };

    useEffect(() => {
        if (pageCount === 0) {
            setIsDisabled(false)
        }
    }, [pageCount])

    return (
        <div className='py-[80px] sm:py-[100px] min-h-screen'>
            <div className='max-w-[900px] mx-auto my-0 text-center text-charcoal px-10'>

                {pageCount === 0 ? (
                    <PageOne/>
                ) : pageCount === 1 ? (
                    <PageTwo newUser={newUser} setNewUser={setNewUser} setIsDisabled={setIsDisabled} pageCount={pageCount}/>
                ) : pageCount === 2 ? (
                    <PageThree newUser={newUser} setNewUser={setNewUser} setIsDisabled={setIsDisabled} pageCount={pageCount}/>
                ) : pageCount === 3 ? (
                    <PageFour newUser={newUser} setNewUser={setNewUser} setIsDisabled={setIsDisabled} pageCount={pageCount}/>
                ) : pageCount === 4 ? (
                    <Confirmation newUser={newUser} setNewUser={setNewUser}/>
                ) : null}                

                <div className={`max-w-[600px] mx-auto flex flex-col sm:flex-row gap-5 mt-20 ${pageCount !== 0 ? 'justify-between' : 'justify-center'}`}>
                    {pageCount !== 0 && <button onClick={(e:MouseEvent<HTMLButtonElement>) => {previousPage(e); handleSave(e)}} className='slide-btn-rev py-4 px-10 text-lg rounded-full bg-charcoal text-white'><div className='mx-auto rev flex justify-center items-center gap-3'><MdOutlineKeyboardArrowLeft className='h-5 w-5'/> Back</div></button>}
                    {pageCount !== 4 ? 
                        <div className="fade-up"><button disabled={isDisabled} onClick={(e:MouseEvent<HTMLButtonElement>) => {nextPage(e); pageCount !== 0 && handleSave(e)}} className='disabled:opacity-40 w-full slide-btn py-4 px-10 text-lg rounded-full bg-charcoal text-white flex justify-center items-center gap-3'>Continue <MdOutlineKeyboardArrowRight className='h-5 w-5'/></button></div>
                    : 
                        <button onClick={(e:MouseEvent<HTMLButtonElement>) => {handleSave(e); router.push('/')}} className='w-full sm:w-auto slide-btn py-4 px-10 text-lg rounded-full bg-charcoal text-white text-center'><div className='mx-auto'>Submit</div></button>
                    }
                </div>
            </div>
        </div>
    )
}