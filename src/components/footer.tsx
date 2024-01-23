import React, { useEffect } from "react";
import Link from "next/link";
import Component from "@/styles/modules/footer.module.css";
import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/components/languageContext'

export default function Footer() {
  const { t, i18n } = useTranslation();
  const { language } = useLanguage();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);
  return (
    <footer className={Component.footer}>
      <div className={Component.footerGridContainer}>
        <div className={Component.footerGridItemLeft}>
          <ul>
            <li>
              <Link target='blank' href="https://apps.microsoft.com/detail/9NN3NXQLWQCF?hl=fr-wf&gl=WF" className={Component.footerLink}>
                <p className={Component.footerText}>
                  {t("download")}
                </p>
              </Link>
            </li>
            <li>
              <Link target='blank' href="https://github.com/Onivoid/SCUTT" className={Component.footerLink}>
                <p className={Component.footerText}>
                  Github
                </p>
              </Link>
            </li>
            <li>
              <Link target='blank' href="https://discord.gg/65VdVwdHT5" className={Component.footerLink}>
                <p className={Component.footerText}>
                  Discord
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={Component.footerGridItemRight}>
          <ul>
            <li>
              <p className={Component.footerText}>
                {t("footerPrivacy")}
              </p>
            </li>
            <li>
              <p className={Component.footerText}>
                {t("footerCookies")}
              </p>
            </li>
            <li>
              <p className={Component.footerText}>
                {t("footerContact")}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <p className={Component.footerCopy}>© 2024 Onivoid</p>
    </footer>
  )
}