import React, { useEffect } from 'react';
import Logo from '@/resources/logo.svg';
import Image from 'next/image';
import ComponentStyle from '@/styles/modules/loading.module.css';
import { useRouter } from 'next/router';

export default function Loading(){
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/home');
    }, 3000);
  });

  return(
    <div className={ComponentStyle.container}>
      <Image src={Logo} alt="SCUTT Logo" className={ComponentStyle.logo}/>

      <svg className={ComponentStyle.anim} viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg">

      <circle className={ComponentStyle.circle1} stroke="var(--primary-900)" strokeWidth="5" fillRule="nonzero" fill="transparent" cx="150" cy="150" r="145"></circle>
      
      </svg>
    </div>
  )
}