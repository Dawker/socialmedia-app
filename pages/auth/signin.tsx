import { GetServerSideProps } from 'next'
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from 'next-auth/react'

const signin = ({ providers }: Record<LiteralUnion<any, string>, ClientSafeProvider[]>) => {
  return (
    <>
      {Object?.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
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
