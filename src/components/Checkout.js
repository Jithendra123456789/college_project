import { init } from "@commercetools/checkout-browser-sdk";

init({
  checkoutConfig: {
    sellerId: "{sellerId}",
    applicationId: "{applicationId}",
    host: "https://app.checkout.{region}.commercetools.com",
    callbackUrl: "{callbackUrl}",
    cartId: "{cartId}",
    accessToken: "{accessToken}",
    locale: "{locale}",
  },
});
