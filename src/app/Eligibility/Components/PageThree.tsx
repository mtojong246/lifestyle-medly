import { states } from "@/app/states";
import { RxChevronDown } from "react-icons/rx";


export default function PageThree() {
    return (
        <div className='max-w-[600px] mx-auto'>
            <p className='text-xl mb-10'>Which state do you live in?</p>
            <select className={`rounded p-4 border-b border-darkvanilla w-full focus:border-maize focus:outline-none bg-[#e8e8e8]/[.54] appearance-none`} name='state'>
                {states.map(state => (
                    <option value={state.value}>{state.value}</option>
                ))}
            </select>
        </div>
    )
}