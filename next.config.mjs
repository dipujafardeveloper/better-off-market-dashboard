/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "nazmulhasan.s3.us-east-1.amazonaws.com",
      "your-bucket.s3.amazonaws.com",
    ],
  },
};

export default nextConfig;
