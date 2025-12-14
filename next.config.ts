import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
