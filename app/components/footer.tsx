"use client"

import { Fragment, useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className="flex pt-lg-10 pt-5 justify-center">      
        <p>
            {`© ${year}. All Rights Reserved. images are created with AI`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;