import { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
import { ToastContainer } from 'react-toastify'

import s from './layout.module.scss'

import { Header } from '@/widgets/Header/header'

export const Layout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <div className={s.Layout}>
      <Header />
      <div className={s.contentContainer}>
        <div className={s.contentWrapper}>{children}</div>
      </div>
      <div className={s.navigation}>
        <Link href={`/registration`}>
          <h2>registration →</h2>
        </Link>
        <Link href={`/login`}>
          <h2>login →</h2>
        </Link>
      </div>
    </div>
  )
}
export const getLayout = (page: ReactElement) => {
  return (
    <>
      <Layout>{page}</Layout>
      <ToastContainer />
    </>
  )
}
