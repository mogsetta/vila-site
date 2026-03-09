import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tailoring-sewing-services-rutherford-county",
        destination: "/Alterations",
        permanent: true,
      },
      {
        source: "/dry-cleaning-laundry-services-williamson-county",
        destination: "/dry-cleaning",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
