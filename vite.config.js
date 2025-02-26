import react from '@vitejs/plugin-react';

export default {
  base: '/',
  plugins: [react()],

  resolve: {
    alias: {
      '~slick-carousel': 'node_modules/slick-carousel'
    }
  }
};
