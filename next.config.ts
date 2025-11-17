/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["randomuser.me"], // ✅ allow this external host
  },
};

export default nextConfig;
