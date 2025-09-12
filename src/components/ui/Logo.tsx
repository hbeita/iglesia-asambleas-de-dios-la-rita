import React from "react";
import logoWhiteSm from "../../assets/logo-white-sm.png";
import logoWhite from "../../assets/logo-white.png";

interface LogoProps {
  className?: string;
  alt?: string;
  size?: "default" | "small";
}

const Logo: React.FC<LogoProps> = ({
  className = "h-12 w-auto",
  alt = "Logo Iglesia Asambleas de Dios La Rita",
  size = "default",
}) => {
  const logoSrc = size === "small" ? logoWhiteSm : logoWhite;

  return <img src={logoSrc} alt={alt} className={className} />;
};

export default Logo;
