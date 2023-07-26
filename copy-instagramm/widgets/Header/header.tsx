import Link from 'next/link'

import s from './header.module.scss'

import { Mask } from '@/public/icon/mask'

type HeaderPropsType = {}
export const Header = (props: HeaderPropsType) => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <h2>Inctagram</h2>
        <Mask className={s.logo} />
        {/*<img src={} alt"logo" className={s.logo} />*/}
        <span>Select</span>
      </div>
    </div>
  )
}
