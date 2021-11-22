import { useSession } from "next-auth/react";

import { Feed, Header, Modal } from "../components";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Header profilePic={session?.user?.profilePic} />
      <Feed {...session?.user} />

      <Modal />
    </div>
  )
}
