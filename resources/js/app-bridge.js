import createApp from "@shopify/app-bridge";

const appBridgeConfig = {
  apiKey: "88714c066d5cce46f75895fb4cb2e810", // Thay bằng API Key của Shopify app
  shopOrigin: new URLSearchParams(window.location.search).get("shop"), // Lấy tên shop từ URL
  forceRedirect: true, // Bắt buộc redirect về Shopify Admin
};

// Khởi tạo App Bridge
const app = createApp(appBridgeConfig);

export default app;
