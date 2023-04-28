import Link from 'next/link';
import { UilFacebook } from '@iconscout/react-unicons';
import { UilGithub } from '@iconscout/react-unicons'
import { UilInstagramAlt } from '@iconscout/react-unicons';
import { UilLinkedin } from '@iconscout/react-unicons';
import { UilYoutube } from '@iconscout/react-unicons';
import { UilApps } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import {useState} from 'react';

const Navbar = () => {
        

        const [showMenu, setShowMenu]= useState(true)
        
            
        
    return ( 
        <nav>
            <div className="container nav__container">
                <div className="logo"><h3>Miracle Agholor</h3></div>

                <div  ><button className='open__btn' onClick={() =>setShowMenu(false)}><UilApps/></button></div>
                
                <div className={`"menu" ${showMenu ? "hide__menu" : "show__menu"}`}>
                 <div><button className='close__btn' onClick={() =>setShowMenu(true)}><UilTimes/></button></div>
                    <ul>
                      <li><Link href='/'>Home  |</Link></li>
                      <li><Link href='#About'>About | </Link></li>
                      <li><Link href='/Projects'>Projects | </Link></li>
                      <li><Link href='/Contact'>Contact | </Link></li>
                    </ul>
                </div>
                

                <div className='so__icons'>
                    <Link href='https://web.facebook.com/miracle.agholor' className='socials'><UilFacebook className='shalls' /></Link>
                    <Link href='https://github.com/solomonMiracle' className='socials'><UilGithub className='shalls'/></Link>
                    <Link href='' className='socials'><UilInstagramAlt className='shalls'/></Link>
                    <Link href='https://www.linkedin.com/in/miracle-agholor-b16b88150' className='socials'><UilLinkedin className='shalls'/></Link>
                    <Link href='https://www.youtube.com/channel/UC0RcrVN726XoP9bi764GVlg' className='socials'>< UilYoutube className='shalls'/></Link>
                </div>

            </div>
        </nav>
     );
}
 
export default Navbar;