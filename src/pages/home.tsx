import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/components/languageContext'
import { Card } from 'primereact/card';
import PageStyle from '@/styles/modules/home.module.css';
import Image from 'next/image';
import SoftwareLayout from '@/resources/SoftwareLayout.png';
import Footer from '@/components/footer';
import HowToUse from '@/components/howToUse';

export default function Home() {
  const { t, i18n } = useTranslation();
  const { language } = useLanguage();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  useEffect(() => {console.log(language, i18n)}, [language, i18n]);

  return (
    <>
      <section className={PageStyle.firstSection}>
        <div className={PageStyle.firstSectionTextContainer}>
          <h1 className={PageStyle.title}>{t("homePage_greetingsTitle")}</h1>
          <h2>{t("homePage_greetingsSubtitle")}</h2>
        </div>
        <div className={PageStyle.firstSectionImageContainer}>
          <Image src={SoftwareLayout} alt="SCUTT" className={PageStyle.softwareImage}/>
        </div>
      </section>
      <section className={PageStyle.secondSection}>
        <div className={PageStyle.gridContainer}>
          <Card className={PageStyle.gridItem}>
            <h3 className={PageStyle.gridItemTitle}>
              <i className='pi pi-user' style={{color: 'var(--primary-500)', marginRight:'5px'}}/>
              {t("homePage_featureTitle1")}
            </h3>
            <p className={PageStyle.gridItemText}>{t("homePage_featureDescription1")}</p>
          </Card>
          <Card className={PageStyle.gridItem}>
            <h3 className={PageStyle.gridItemTitle}>
              <i className='fa-solid fa-bolt' style={{color: 'var(--primary-500)', marginRight:'5px'}}/>
              {t("homePage_featureTitle2")}
            </h3>
            <p className={PageStyle.gridItemText}>{t("homePage_featureDescription2")}</p>
          </Card>
          <Card className={PageStyle.gridItem}>
            <h3 className={PageStyle.gridItemTitle}>
              <i className='pi pi-cog' style={{color: 'var(--primary-500)', marginRight:'5px'}}/>
              {t("homePage_featureTitle3")}
            </h3>
            <p className={PageStyle.gridItemText}>{t("homePage_featureDescription3")}</p>
          </Card>
          <Card className={PageStyle.gridItem}>
            <h3 className={PageStyle.gridItemTitle}>
              <i className='pi pi-check' style={{color: 'var(--primary-500)', marginRight:'5px'}}/>
              {t("homePage_featureTitle4")}
            </h3>
            <p className={PageStyle.gridItemText}>{t("homePage_featureDescription4")}</p>
          </Card>
        </div>
      </section>
      <section className={PageStyle.thirdSection}>
        <h2>{t("htu_title")}</h2>
        <HowToUse />
      </section>
      <Footer />
    </>
  )
}
