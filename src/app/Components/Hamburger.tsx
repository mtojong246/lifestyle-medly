'use client';

export default function Hamburger({ isOpen } : { isOpen: boolean }){
    return (
        <div id="nav-icon4" className={`${isOpen ? 'open' : ''} mr-4`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}