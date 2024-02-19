// import React from 'react';

// const Contact = () => {
//   return (
//     <>
//       <div id="contacts" className="mt-[3vw] h-[10vw]"></div>
      // <div className="md:h-[50vh] max-md:[35vh] w-full container-contact bg-[#e5e7eb]">
      //   <div className="my-auto reveal flex justify-center items-center max-sm:text-[12vw] sm:max-md:text-[8.5vw] md:max-lg:text-[6vw] text-[4vw] py-16 text-[#879395]">
      //     聯繫我!
      //   </div>
      //   <section className="my-auto w-full md:h-[10vw] max-md:[5vh] flex justify-center items-center">
      //     <ul className="reveal w-[40%] h-40 flex justify-between items-center px-auto">
      //       <li>
      //         <a target="_blank" href="https://www.facebook.com/sou.kenny.5/" className="text-5xl text-[#139cf8]">
      //           <ion-icon name="logo-facebook"></ion-icon>
      //         </a>
      //       </li>
      //       <li>
      //         <a target="_blank" href="https://www.youtube.com/channel/UCRpLwlgoTh4YtZwyL6td51g" className="text-5xl text-[#fe0708]">
      //           <ion-icon name="logo-youtube"></ion-icon>
      //         </a>
      //       </li>
      //       <li>
      //         <a target="_blank" href="https://www.instagram.com/soukinowo/" className="text-5xl text-[#f411c2]">
      //           <ion-icon name="logo-instagram"></ion-icon>
      //         </a>
      //       </li>
      //       <li>
      //         <a target="_blank" href="https://github.com/KennyQuQ" className="text-5xl text-[#adbac7]">
      //           <ion-icon name="logo-github"></ion-icon>
      //         </a>
      //       </li>
      //       <li>
      //         <a target="_blank" href="mailto:spkennypro@gmail.com" className="text-5xl text-[#fbbc04]">
      //           <ion-icon name="mail-outline"></ion-icon>
      //         </a>
      //       </li>
      //     </ul>
      //   </section>
      // </div>
//     </>
//   );
// };

// export default Contact;

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const upperLayer = document.getElementById('upper');
    const lowerLayer = document.getElementById('lower');

    const handleHover = () => {
      lowerLayer.style.backgroundColor = '#94bdff'; // Change this to your desired hover color
    };

    const handleMouseOut = () => {
      lowerLayer.style.backgroundColor = ''; // Reset the background color on mouse out
    };

    if (upperLayer && lowerLayer) {
      upperLayer.addEventListener('mouseenter', handleHover);
      upperLayer.addEventListener('mouseleave', handleMouseOut);
    }

    return () => {
      if (upperLayer && lowerLayer) {
        upperLayer.removeEventListener('mouseenter', handleHover);
        upperLayer.removeEventListener('mouseleave', handleMouseOut);
      }
    };
  }, []);

  return (
    <div id="contact" className="my-32 py-12 relative bg-white h-screen flex items-center">
      <div className="max-w-6xl max-md:ml-8 md:ml-16 xl:ml-36 mt-12 mx-auto w-full flex flex-col items-center">
        <div className="w-full xl:pr-16 xl:text-left max-xl:mx-auto max-md:leading-3">
          <h2 className="text-6xl text-gray-800 font-bold mb-4 leading-[8rem]">
            ʕ•́ᴥ•̀ʔっ♡ <br />
            {t('contacts_sayhi')}<br />
          </h2>
        </div>
        <div className='w-full h-[30vh] flex items-start justify-start my-12 mb-36 max-xl:flex-col max-xl:gap-16'>

  {/* Left Box */}
  <div className="max-lg:w-[90%] lg:w-1/2 relative mt-8">
    <div
      id="lower"
      className="absolute max-md:text-4xl md:text-5xl border border-blue-500 border-solid border-[0.3rem] text-blue-500 py-6 px-8 rotate-3 transition-all transform translate-x-4 translate-y-4"
    >
      <a href="mailto:spkennypro@gmail.com">{t('contacts_mail')}</a>
    </div>
    <a id="upper" href="mailto:spkennypro@gmail.com">
      <button className="relative max-md:text-4xl md:text-5xl z-20 border border-[0.3rem] border-blue-500 border-solid bg-white text-black hover:text-blue-400 duration-[0.5s] py-6 px-8 transform rotate-3 transition-transform hover:translate-x-2 hover:translate-y-2">
        {t('contacts_mail')}
      </button>
    </a>
  </div>

  {/* Right Box */}
  <div className="w-full xl:w-[20%] xl:ml-[30rem] h-64 max-xl:-ml-[4.5rem] max-md:ml-[0rem]">
    <div className="md:h-[50vh] max-md:[35vh] w-full container-contact">
      <section className="my-auto w-full md:h-[10vw] max-md:[5vh] flex justify-center items-center">
        <ul className="max-md:w-[40%] h-40 flex justify-between items-center px-auto max-md:-ml-[2rem] max-md:gap-[1rem] md:gap-[3rem] md:-ml-[8rem]">
          <li>
            <a target="_blank" href="https://www.facebook.com/sou.kenny.5/" className="max-md:text-4xl md:text-5xl text-[#139cf8]">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.youtube.com/channel/UCRpLwlgoTh4YtZwyL6td51g" className="max-md:text-4xl md:text-5xl text-[#fe0708]">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/soukinowo/" className="max-md:text-4xl md:text-5xl text-[#da01d9]">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/KennyQuQ" className="max-md:text-4xl md:text-5xl text-[#24292e]">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://discord.com/users/.kennyowo" className="max-md:text-4xl md:text-5xl text-[#5865f1]">
              <ion-icon name="logo-discord"></ion-icon>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>

</div>

      </div>
    </div>
  );
};

export default Contact;
