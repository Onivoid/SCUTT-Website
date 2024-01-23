import LayoutStyle from '@/styles/modules/layout.module.css'
import Navbar from './navbar'
import { useRouter } from 'next/router';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return(
    <div className={LayoutStyle.container}>
      {router.pathname === '/' ? null :<Navbar />}
      {children}
    </div>
  )
}