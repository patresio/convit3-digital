import { Righteous } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const font = Righteous({
  subsets: ['latin'],
  weight: '400'
})

const Logo = () => {
  return (
    <Link href="/" className={`flex items-center gap-2 ${font.className}`}>
      <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      <h1 className="leading-5 flex flex-col items-center text-lg">
        <div>
          CONVIT<span className="text-blue-400">3</span>
        </div>
        <div>DIGITAL</div>
      </h1>
    </Link>
  )
}

export default Logo
