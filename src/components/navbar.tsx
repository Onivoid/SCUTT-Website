"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Logo from '@/resources/logo.svg';
import Image from 'next/image';
import ComponentStyle from '@/styles/modules/navbar.module.css';
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import Link from 'next/link';

const MOBILE_SCREEN_WIDTH = 960;

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    const offset = 50;
    const scrolled = window.scrollY > offset;
    setHasScrolled(scrolled);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= MOBILE_SCREEN_WIDTH);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const start = <Image src={Logo} alt="SCUTT" className={ComponentStyle.logo} />;

  const end = isMobile 
    ? (
      <div>
        <Sidebar className={ComponentStyle.sidebar}
          closeOnEscape={false} 
          visible={visible}
          onHide={() => setVisible(false)} 
          fullScreen>
            <ul className={ComponentStyle.sidebarList}>
              <li>
                <Link target='blank' href="https://apps.microsoft.com/detail/9NN3NXQLWQCF?hl=fr-wf&gl=WF" className={ComponentStyle.link}>Télécharger</Link>
              </li>
              <li>
                <Link target='blank' href="https://github.com/Onivoid/SCUTT" className={ComponentStyle.link}>Github</Link>
              </li>
              <li>
                <Link target='blank' href="https://apps.microsoft.com/detail/9NN3NXQLWQCF?hl=fr-wf&gl=WF" className={ComponentStyle.link}>Discord</Link>
              </li>
              <li>
                <Link target='blank' href="https://www.paypal.com/donate/?hosted_button_id=39UVHJRAQRQUJ" className={ComponentStyle.link}>
                  Soutenir le Projet
                  <i className='fa fa-heart' style={{marginLeft: "10px"}}></i>
                </Link>
              </li>
            </ul>
        </Sidebar>
        <Button className={ComponentStyle.menuButton} icon="pi pi-bars" onClick={() => setVisible(true)} />
      </div>
    )
    :(
      <div className={ComponentStyle.navbar}>
        <Link target='blank' href="https://apps.microsoft.com/detail/9NN3NXQLWQCF?hl=fr-wf&gl=WF" className={ComponentStyle.link}>Télécharger</Link>
        <Link target='blank' href="https://github.com/Onivoid/SCUTT" className={ComponentStyle.link}>Github</Link>
        <Link target='blank' href="https://discord.gg/65VdVwdHT5" className={ComponentStyle.link}>Discord</Link>
        <Link target='blank' href="https://www.paypal.com/donate/?hosted_button_id=39UVHJRAQRQUJ" className={ComponentStyle.linkDonation}>
          Soutenir le Projet
          <i className='fa fa-heart' style={{marginLeft: "10px"}}></i>
        </Link>
      </div>
    )

  return (
    <div className={ComponentStyle.container}>
      <Menubar
        menuIcon="none"
        start={start}
        end={end} 
        className={hasScrolled ? ComponentStyle.baseMenuOff :ComponentStyle.baseMenuOn}/>
      <Menubar 
        menuIcon="none"
        start={start}
        end={end} 
        className={hasScrolled ? ComponentStyle.menuScrolledOn : ComponentStyle.menuScrolledOff}/>
    </div>
  );
}