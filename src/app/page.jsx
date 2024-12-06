"use client";

import {
  useUtils,
  usePopup,
  useMainButton,
  useViewport,
} from "@telegram-apps/sdk-react";
import styles from '../css_modules/HOMEPAGE.module.css';
import { images } from '../StoreImages/StoreImages';
import { Button } from "@/components/ui/button";

export default function Home() {
  const utils = useUtils();
  const popUp = usePopup();
  const mainBtn = useMainButton();
  const viewport = useViewport();

  const handlePopUp = async () => {
    const response = await popUp.open({
      title: " Rabble",
      message: "Link will lead to website",
      buttons: [
        { id: "link", type: "default", text: "Open rabble.pro" },
        { type: "cancel" },
      ],
    });
    if (response === "link") {
      utils.openLink("https://rabble.pro");
    }
  };

  const handleShare = async () => {
    utils.shareURL(
      "https://t.me/+rFqLyk4_W-diZDZl",
      "Join! Mini Apps Hackathon group!"
    );
  };
  const handleMainBtn = async () => {
    mainBtn.enable();
    mainBtn.setText("New Text");
    mainBtn.setBgColor("#08F7AF");
    if (mainBtn.isVisible) {
      mainBtn.hide();
    } else {
      mainBtn.show();
    }
  };

  mainBtn.on("click", () => {
    mainBtn.showLoader();
    mainBtn.setText("Action Performing");
    setTimeout(() => {
      console.log("Main Button Clicked");
      mainBtn.hideLoader();
      mainBtn.setText("New Text");
      mainBtn.hide();
    }, 2000);
  });

  const handleViewport = async () => {
    if (!viewport?.isExpanded) {
      viewport?.expand();
    }
  };
  return (
<div className={styles.homePage1}>
      <img className={styles.altcoinbgIcon} alt="" src={images.AltcoinBg} />
      <div className={styles.profilerectangle} />
      <img className={styles.userlogoIcon} alt="" src={images.UserLogo} />
      <b className={styles.wxyz}>WXYZ</b>
      <img className={styles.useropenicon} alt="" src={images.UserOpenIcon} />
      <div className={styles.walletButton}>
        <Button />
      </div>
      <div className={styles.altcoinrec} />
      <div className={styles.tokenpricerec} />
      <img className={styles.days12leftIcon} alt="" src={images.Days12Left} />
      <b className={styles.altcoinist}>ALTCOINIST</b>
      <div 
        className={styles.homePage1Child} 
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      />
      <div 
        className={styles.homePage1Item} 
        onClick={() => navigate('/home2')}
        style={{ cursor: 'pointer' }}
      />
      <div 
        className={styles.homePage1Inner} 
        onClick={() => navigate('/home3')}
        style={{ cursor: 'pointer' }}
      />
      <img className={styles.buttonsBackground} alt="" src={images.ButtonsBackground} />
      <img className={styles.cursorbuttonsIcon} alt="" src={images.CursorButtons} />
      <b className={styles.apply}>Apply To Organize ICO</b>
      <div className={styles.apply1}>
        Apply to organize an ICO by ensuring compliance with legal and regulatory requirements.
      </div>
      <img className={styles.altcoinimgIcon} alt="" src={images.AltcoinImg} />
      <img className={styles.activeborderimageIcon} alt="" src={images.ActiveBorderImage} />
      <b className={styles.active}>ACTIVE</b>
      <b className={styles.tokenPrice}>TOKEN PRICE</b>
      <b className={styles.b}>
        <span className={styles.txt}>
          <p className={styles.p}>{`10/11/2024         `}</p>
          <p className={styles.p1}>16:30</p>
        </span>
      </b>
      <b className={styles.b1}>
        <span className={styles.txt}>
          <p className={styles.p}>{`30/11/2024         `}</p>
          <p className={styles.p1}>16:30</p>
        </span>
      </b>
      <b className={styles.d02h20m}>12d 02h 20m 48s LEFT</b>
      <b className={styles.usdt}>0.009122 USDT</b>
      <img className={styles.mutliplediscIcon} alt="" src={images.MutlipleDisc} />
      <img className={styles.discIcon} alt="" src={images.Disc} />
      <div className={styles.full} />
      <div className={styles.full80} />
      <img className={styles.calenderIcon} alt="" src={images.calender} />
      <img className={styles.calenderIcon1} alt="" src={images.calender}/>
      <img className={styles.clockIcon} alt="" src={images.clock} />
      <img className={styles.clockIcon1} alt="" src={images.clock} />
      <img className={styles.timerIcon} alt="" src={images.Timer} />
      <div className={styles.nftimagerec} />
      <div className={styles.stakeimagerec} />
      <img className={styles.nftimageIcon} alt="" src={images.NftImage} />
      <img className={styles.stakeimageIcon} alt="" src={images.StakeImage} />
      <div className={styles.nfttextrec} />
      <div className={styles.rectangleDiv} />
      <b className={styles.nft}>NFT</b>
      <b className={styles.stake}>STAKE</b>
    </div>
  );
}
