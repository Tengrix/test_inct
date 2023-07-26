import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import s from '@/styles/Home.module.css'
import { getLayout } from '@/widgets/Layout/layout'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <div className={s.container}>
      <div className={s.center}>
        <Image
          className={s.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className={s.navigation}>
        <Link href={`/register`}>registration → </Link>
        <Link href={`/login`}>login → </Link>
      </div>
    </div>
  )
}
Home.getLayout = getLayout
export default Home
