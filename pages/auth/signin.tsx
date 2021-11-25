import { GetServerSideProps } from 'next'
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from 'next-auth/react'
import { Header } from '../../components'

const signin = ({ providers }: Record<LiteralUnion<any, string>, ClientSafeProvider[]>) => {
  return (
    <>
      <Header profilePic={""} />
      <div className="flex flex-col items-center justify-center 
      -mt-56
        min-h-screen py-2 px-14 text-center">
        <img src="https://links.papareact.com/OCW" alt="logo" className="w-80" />
        <p className="font-xs italic">This is not a real app</p>
        <div className="mt-24">
          {Object?.values(providers).map((provider) => (
            <div key={provider.name}>
              <button className='p-3 bg-blue-500 rounded-lg text-white'
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }


}
export default signin
