import Head from 'next/head'

export default function Home() {
  const check = null;
  return (
    <div>
      {check ?? "false"}
      <h1>cf</h1>
    </div>
  )
}
