import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6"

export default function Social() {
    return (
        <div className='my-5 flex justify-end items-center gap-1 text-darkvanilla'>
            {/* <a href='#' target="_blank" rel="noreferrer" className="text-sm border border-[#e5e7eb] rounded py-2 px-3 hover:bg-maize hover:border-maize hover:text-white">Visit Page</a> */}
                <a href='https://www.facebook.com/profile.php?id=61555345954621' target="_blank" rel="noreferrer"><FaFacebook className='h-6 w-6 hover:text-maize' /></a>
                <a href='https://www.instagram.com/lifestylemedly/' target="_blank" rel="noreferrer"><FaInstagram className='h-6 w-6 hover:text-maize' /></a>
                <a href='https://www.tiktok.com/@_lifestylemedly' target="_blank" rel="noreferrer"><FaTiktok className='h-6 w-6 hover:text-maize' /></a>
                <a href='https://www.youtube.com/channel/UC7sflAG70ohUbJYCsULx1og' target="_blank" rel="noreferrer"><FaYoutube className='h-6 w-6 hover:text-maize' /></a>
       </div>
    )
}