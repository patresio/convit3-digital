import BiggerLogo from '@/components/template/bigger-logo'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[url('/bg-home.svg')] bg-cover gap-10">
      <div className="flex flex-col items-center gap-4">
        <BiggerLogo />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center">
          Crie e gerencie o seu evento com agilidade e praticidade, com{' '}
          <strong>convit3 Digital</strong>, o seu parceiro de eventos online e
          presenciais
        </p>
      </div>
      <Link href="/event" className="button primary text-lg uppercase">
        Crie o seu evento
      </Link>
    </div>
  )
}

export default Home
