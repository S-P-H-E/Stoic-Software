import SideBarIcon from '@/components/Sidebar/SideBarIcon';
import Logo from '@/public/images/Logo.png'
import HomeIcon from '@/public/images/Home.png'
import Handshake from '@/public/images/Handshake.png'
import Memory from '@/public/images/Memory.png'
import Logout from '@/public/images/Logout.png'
import Image from 'next/image'
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';
import { useState } from 'react';

export default function SideBar({ menu }) {
  const [selectedItem, setSelectedItem] = useState(menu);

  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-[var(--dark-gray)] shadow-xl">
        <SideBarIcon icon={<Image src={Logo} className='w-[15px]' />} text={"S T O I C | Community"} />
        <Divider />
        <SideBarIcon icon={<Image src={HomeIcon} className='w-[15px]' />} text={"Home"} select={selectedItem === "Home"} />
        <SideBarIcon icon={<Image src={Handshake} className='w-[20px]' />} text={"Affiliate Marketing"} select={selectedItem === "Affiliate Marketing"} />
        <SideBarIcon icon={<Image src={Memory} className='w-[20px]' />} text={"AI Automation Agency"} select={selectedItem === "AI Automation Agency"} />
        <Divider />
        <SideBarIcon icon={<Image src={Logout} className='w-[20px]' />} text={"Log-out"} select={selectedItem === "Log-out"} />
      </div>
    </>
  )
}

const Divider = () => <hr className="mx-2 border-[var(--divider)]" />;
