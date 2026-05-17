import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {hostname:"lh3.googleusercontent.com"},
      {
        hostname:"res.cloudinary.com"
      }
    ]
  },
  allowedDevOrigins: ['10.247.88.118'],
};

export default nextConfig;
