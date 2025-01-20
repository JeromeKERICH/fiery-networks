import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],

  resolve: {
    alias: {
      '~slick-carousel': 'node_modules/slick-carousel'
    }
  }
};
