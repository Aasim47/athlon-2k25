import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ["images.theconversation.com", "encrypted-tbn0.gstatic.com","www.sportireland.ie","i2-prod.irishmirror.ie","images.pexels.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.theconversation.com",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "www.sportireland.ie",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "i2-prod.irishmirror.ie",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "**"
      }
    ]
  }
};

export default nextConfig;
