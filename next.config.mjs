/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/solusi/insurance-erp',
        destination: '/solusi/erp-insurance-reinsurance',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
