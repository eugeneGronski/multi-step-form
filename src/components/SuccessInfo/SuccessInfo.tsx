import React from "react";
import checkMarkImage from '../../assets/images/icon-thank-you.svg'


const SuccessInfo = () => {
  return(
    <>
      <img className="h-[110px] pb-5" src={checkMarkImage} alt="checkMark" />
      <h2 className="text-xl pb-5">Thank you</h2>
      <p className="text-base text-slate-400">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support please feel free to email us at support@loremipsum.com</p>
    </>
  )
}

export default SuccessInfo