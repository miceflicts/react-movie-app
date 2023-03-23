import React from 'react'
import footerData from "../../languages/footer.json"

function Footer({language}) {
  return (
    <div className=' text-white text-center mt-[80px] mb-[30px]'>{footerData.Languages[language][0]['Text']}</div>
  )
}

export default Footer;