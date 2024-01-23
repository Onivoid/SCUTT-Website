import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/components/languageContext'
import {
  TabView,
  TabPanel,
  TabPanelPassThroughMethodOptions,
} from "primereact/tabview";
import ComponentStyle from "@/styles/modules/howToUse.module.css";
import Link from 'next/link';
import Image from 'next/image';
import StepThreePicture from '@/resources/StepThreePicture.png';
import StepFourFirstPicture from '@/resources/StepFourFirstPicture.png';
import StepFourSecondPicture from '@/resources/StepFourSecondPicture.png';
import StepFourThirdPicture from '@/resources/StepFourThirdPicture.png';
import StepFourFourthPicture from '@/resources/StepFourFourthPicture.png';

export default function HowToUse() {
  const { t, i18n } = useTranslation();
  const { language } = useLanguage();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const tabs = [
    { title: t("htu_step1"), content: () => (
      <div className={ComponentStyle.paneContainer}>
        <p>- {t("htu_step1Description")}</p>
        <Link target='blank' href="https://apps.microsoft.com/detail/9NN3NXQLWQCF?hl=fr-wf&gl=WF">
          <Image alt="Microsoft Store" src="https://get.microsoft.com/images/fr-fr%20light.svg" width={250} height={80}/>
        </Link>
      </div>
    )},
    { title: t("htu_step2"), content: () => (
      <div className={ComponentStyle.paneContainer}>
        <p>- {t("htu_step2Description")}</p>
        <p className={ComponentStyle.disclaimer}>
          <i className='fa-solid fa-triangle-exclamation'></i>
          {t("htu_step2DescriptionIssue")}
        </p>
      </div>
    )},
    { title: t("htu_step3"), content: () => (
      <div className={ComponentStyle.paneContainer}>
        <p>- {t("htu_step3Description")}</p>
        <Image alt="Step 3" src={StepThreePicture} width={318} height={323}/>
      </div>
    )},
    { title: t("htu_step4"), content: () => (
      <div className={ComponentStyle.paneContainer}>
        <ul>
          <li>
            <p>- {t("htu_step4DescriptionFirst")}</p>
            <Image alt="Step 3" src={StepFourFirstPicture} width={307} height={328}/>
          </li>
          <li>
            <p>- {t("htu_step4DescriptionSecond")}</p>
            <Image alt="Step 3" src={StepFourSecondPicture} width={642} height={136}/>
          </li>
          <li>
            <p>- {t("htu_step4DescriptionThird")}</p>
            <Image alt="Step 3" src={StepFourThirdPicture} width={546} height={198}/>
          </li>
          <li>
            <p>- {t("htu_step4DescriptionFourth")}</p>
            <Image alt="Step 3" src={StepFourFourthPicture} width={521} height={178}/>
          </li>
        </ul>
      </div>
    )},
  ];

  const panelClassName = (parent: any, index: number) => {
    if (parent.state.activeIndex === index) return ComponentStyle.activePanel;
  };

  return (
    <TabView className={ComponentStyle.tabs} scrollable>
      {tabs.map((tab, i) => {
        return (
          <TabPanel
            pt={{
              headerAction: ({ parent }: TabPanelPassThroughMethodOptions) => ({
                className: panelClassName(parent, i),
              }),
            }}
            key={i}
            header={tab.title}
          >
            {typeof tab.content === 'function' ? tab.content() : tab.content}
          </TabPanel>
        );
      })}
    </TabView>
  );
}
