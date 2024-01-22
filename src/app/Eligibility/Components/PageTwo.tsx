import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import { UserType } from "../page";

const genders = [
    {
        value: '',
        label: 'Select gender',
    },
    {
        value: 'Female',
        label: 'Female'
    },
    {
        value: 'Male',
        label: 'Male'
    },
    {
        value: 'Intersex/other',
        label: 'Intersex/other'
    }
]

export default function PageTwo({newUser, setNewUser}: {newUser: UserType, setNewUser: Dispatch<SetStateAction<UserType>>}) {

    const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    };

    const handleSelect = (e:ChangeEvent<HTMLSelectElement>) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    };

    const calculateAge = (birthday: Date) => { // birthday is a date
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    useEffect(() => {
        const feet:number = Number(newUser.height_feet*12);
        const inch:number = Number(newUser.height_inches);
        const totalHeight:number = feet + inch;
        const bottom:number = totalHeight**2;
        const exact = (newUser.weight/bottom)*703;
        const rounded = Math.round(exact * 10)/10;
        setNewUser({
            ...newUser,
            bmi: rounded,
        })
    }, [newUser.weight, newUser.height_feet, newUser.height_inches]);
    
    useEffect(() => {
        const age = calculateAge(new Date(newUser.date_of_birth));
        setNewUser({
            ...newUser,
            age,
        })
    }, [newUser.date_of_birth])


    return (
        <div className='max-w-[600px] mx-auto'>
            <p className='text-xl mb-10'>Please provide the following information:</p>
            <div className='flex justify-between items-center gap-5 mb-5'>
                <div className='text-left grow'>
                    <label className='block'>First name</label>
                    <input onChange={handleInput} value={newUser.first_name} name='first_name' className="rounded block p-4 border-b border-darkvanilla focus:border-maize focus:outline-none w-full bg-[#e8e8e8]/[.54]" />
                </div>
                <div className='text-left grow'>
                    <label className='block'>Last name</label>
                    <input onChange={handleInput} value={newUser.last_name} name='last_name' className="rounded block p-4 border-b border-darkvanilla focus:border-maize focus:outline-none w-full bg-[#e8e8e8]/[.54]" />
                </div>
            </div>
            <div className='text-left mb-5'>
                <label className='block'>Gender</label>
                <select onChange={handleSelect} name='gender' value={newUser.gender} className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54] appearance-none">
                    {genders.map((gender,i) => (
                        <option key={i} value={gender.value}>{gender.label}</option>
                    ))}
                </select>
            </div>
            <div className='text-left mb-5'>
                <label className='block'>Date of birth</label>
                <input onChange={handleInput} value={newUser.date_of_birth} name='date_of_birth' className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" type='date' />
            </div>
            <div className='text-left mb-5'>
                <label className='block'>Phone number</label>
                <input onChange={handleInput} value={newUser.phone_number} name='phone_number' className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]"  />
            </div>
            <div className='text-left mb-5'>
                <label className='block'>Email</label>
                <input onChange={handleInput} value={newUser.email} name='email' className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" />
            </div>
            <div className='mb-5 text-left'>
                <label className='block'>Height</label>
                <div className='flex justify-between items-center gap-5 '>
                    <input onChange={handleInput} value={newUser.height_feet ? newUser.height_feet : ''} name='height_feet' className="rounded p-4 border-b border-darkvanilla grow focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" placeholder="Feet" />
                    <input onChange={handleInput} value={newUser.height_inches ? newUser.height_inches : ''} name='height_inches' className="rounded p-4 border-b border-darkvanilla grow focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" placeholder="Inches" />
                </div>
            </div>
            <div className='flex justify-between items-center gap-5 mb-5'>
                <div className='text-left grow'>
                    <label className='block'>Weight</label>
                    <input onChange={handleInput} value={newUser.weight ? newUser.weight : ''} name='weight' className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" placeholder="lbs" />
                </div>
                <div className='text-left grow'>
                    <label className='block'>Waist Size</label>
                    <input onChange={handleInput} value={newUser.waist_size ? newUser.waist_size : ''} name='waist_size' className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" placeholder="Inches"/>
                </div>
            </div>
        </div>
    )
}