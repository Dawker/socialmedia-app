import { useSession } from "next-auth/react";

import { Feed, Header } from "../components";

export default function Home() {
  const { data: session, status } = useSession()
  console.log(session)

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Header />
      <Feed />
    </div>
  )
}
