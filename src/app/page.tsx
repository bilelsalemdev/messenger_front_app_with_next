'use client'
import ChatFooter from "@/features/Messages/ChatFooter";
import ChatHeader from "@/features/Messages/ChatHeader";
import UserProfile from "@/features/Messages/UserProfile";
import { useAppSelector } from "@/hooks/reduxHooks";

export default function Home() {
  const user = useAppSelector(state => state.user)
  return (

    <section className={`w-full h-[90vh] flex flex-col ${user?.id ? 'justify-between' : 'justify-end'}`} >
      <ChatHeader />
      <ChatFooter />
    </section>
  )
}
