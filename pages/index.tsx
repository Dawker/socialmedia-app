import { Feed, Header } from "../components";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Header />
      <Feed />

    </div>
  )
}
