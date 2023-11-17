import AddImg from '@/components/svgComponents/AddImg'
import Emojy from '@/components/svgComponents/Emojy'
import Gif from '@/components/svgComponents/Gif'
import Like from '@/components/svgComponents/Like'
import Plus from '@/components/svgComponents/Plus'
import Ticket from '@/components/svgComponents/Ticket'
import React from 'react'

const ChatFooter = () => {
    return (
        <section className='flex ' >
            <div className='flex basis-[20%] w-full items-center justify-around ' >
                <Plus />
                <AddImg />
                <Ticket />
                <Gif />
            </div>
            <div className='flex  items-center relative basis-[75%] w-full bg-[#F0F2F5] h-[36.1px] px-3 rounded-[20px]' >
                <input type="text" placeholder='Aa' className='w-full bg-transparent text-[#65676B] font-normal text-sm outline-none focus:outline-none' />
                <Emojy className='absolute right-3' />
            </div>
            <div className='basis-[5%] flex items-center justify-center' >
                <Like />
            </div>
        </section>
    )
}

export default ChatFooter