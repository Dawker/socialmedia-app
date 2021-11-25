import { useSession } from "next-auth/react";
import { useEffect } from "react";

import { Feed, Header, Modal } from "../components";

export default function Home() {
  const { data: session, status } = useSession();
  // maybe add a spinner 
  if (status === "loading") return null
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Header profilePic={session?.user?.profilePic} />
      <Feed {...session?.user} />
      <Modal />
    </div>
  )
}
