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

export default function PageTwo({newUser, setNewUser, setIsDisabled, pageCount}: {newUser: UserType, setNewUser: Dispatch<SetStateAction<UserType>>, setIsDisabled: Dispatch<SetStateAction<boolean>>, pageCount: number }) {

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
    }, [newUser.date_of_birth]);

    useEffect(() => {
        if (pageCount === 1) {
            if (!newUser.first_name || !newUser.last_name || !newUser.gender || !newUser.date_of_birth || !newUser.phone_number
                || !newUser.email || !newUser.height_feet || !newUser.height_inches || !newUser.weight || !newUser.waist_size) {
                    setIsDisabled(true);
                } else {
                    setIsDisabled(false);
                }
        }
    }, [newUser.first_name, newUser.last_name, newUser.gender, newUser.date_of_birth, newUser.phone_number, newUser.email, newUser.height_feet, newUser.height_inches, newUser.weight, newUser.waist_size, pageCount])


    let formatPhoneNumber = (str:string) => {
        //Filter only numbers from the input
        let cleaned = ('' + str).replace(/\D/g, '');
        
        //Check if the input is of correct length
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      
        if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        };
      
        return str;
      };

     


    return (
        <div className='max-w-[600px] mx-auto'>
            <p className='text-xl mb-10'>Please provide the following information:</p>
            <div className='flex justify-between items-center gap-5 mb-5'>
                <div className='text-left grow'>
                    <label className='block'>First name</label>
                    <input placeholder="John" onChange={handleInput} value={newUser.first_name} name='first_name' className="rounded block p-4 border-b border-darkvanilla focus:border-maize focus:outline-none w-full bg-[#e8e8e8]/[.54]" />
                </div>
                <div className='text-left grow'>
                    <label className='block'>Last name</label>
                    <input placeholder="Doe" onChange={handleInput} value={newUser.last_name} name='last_name' className="rounded block p-4 border-b border-darkvanilla focus:border-maize focus:outline-none w-full bg-[#e8e8e8]/[.54]" />
                </div>
            </div>
            <div className='text-left mb-5'>
                <label className='block'>Gender</label>
                <select onChange={handleSelect} name='gender' style={{color:`${newUser.gender ? 'black' : '#999'}`}} value={newUser.gender} className={`rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54] arrow`}>
                    {genders.map((gender,i) => (
                        <option key={i}  value={gender.value}>{gender.label}</option>
                    ))}
                </select>
            </div>
            <div className='text-left mb-5'>
                <label className='block'>Date of birth</label>
                <input onChange={handleInput} style={{color:`${newUser.date_of_birth ? 'black' : '#999'}`}}  value={newUser.date_of_birth} name='date_of_birth' className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" type='date' />
            </div>
            <div className='text-left mb-5'>
                <label className='block'>Phone number</label>
                <input placeholder="(999) 999-9999" onChange={handleInput} value={formatPhoneNumber(newUser.phone_number)} name='phone_number' className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]"  />
            </div>
            <div className='text-left mb-5'>
                <label className='block'>Email</label>
                <input placeholder="johnDoe@example.com" onChange={handleInput} value={newUser.email} name='email' className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" />
            </div>
            <div className='flex justify-between items-center gap-5 mb-5'>
                <div className='text-left grow'>
                    <label className='block'>Height</label>
                    <input onChange={handleInput} value={newUser.height_feet ? newUser.height_feet : ''} name='height_feet' className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" placeholder="feet" />
                </div>
                <div className='text-left grow'>
                    <label className='block opacity-0'>Height</label>
                    <input onChange={handleInput} value={newUser.height_inches ? newUser.height_inches : ''} name='height_inches' className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" placeholder="inches" />
                </div>
            </div>
            <div className='flex justify-between items-center gap-5 mb-5'>
                <div className='text-left grow'>
                    <label className='block'>Weight</label>
                    <input onChange={handleInput} value={newUser.weight ? newUser.weight : ''} name='weight' className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" placeholder="lbs" />
                </div>
                <div className='text-left grow'>
                    <label className='block'>Waist Size</label>
                    <input onChange={handleInput} value={newUser.waist_size ? newUser.waist_size : ''} name='waist_size' className="rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54]" placeholder="inches"/>
                </div>
            </div>
        </div>
    )
}