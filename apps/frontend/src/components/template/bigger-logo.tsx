import { Righteous } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const font = Righteous({
  subsets: ['latin'],
  weight: '400'
})

const BiggerLogo = () => {
  return (
    <Link
      href="/"
      className={`flex flex-col items-center gap-2 ${font.className}`}
    >
      <Image src="/logo.svg" alt="Logo" width={150} height={150} />
      <h1 className="text-5xl">
        <div>
          CONVIT<span className="text-blue-400">3</span> DIGITAL
        </div>
      </h1>
    </Link>
  )
}

export default BiggerLogo
