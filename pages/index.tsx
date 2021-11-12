import { Button } from "../components";

export default function Home() {
  const check = process.env.NEXT_PUBLIC_DEVELOPMENT_NODE_ENV;
  return (
    <div>
      {/* <Button label="click me" /> */}
      {check}

    </div>
  )
}
