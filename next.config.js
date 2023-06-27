const withPWA = require("next-pwa");

module.exports = withPWA({
  reactDevOverlay: false,
  pwa: {
    dest: "bublic",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  // images: {
  //   domains: ["bigcommerce.vercel.store"],
  // },
});
