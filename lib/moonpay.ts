/**
 * MoonPay Widget URL Generator
 */
export function getMoonPayUrl(walletAddress: string) {
  const base = "https://buy.moonpay.com";
  const apiKey = process.env.NEXT_PUBLIC_MOONPAY_API_KEY || "your-api-key";

  const params = new URLSearchParams({
    apiKey,
    currencyCode: "eth", // Default currency
    walletAddress,
    baseCurrencyAmount: "50", // Suggested initial amount
    lockAmount: "false",
    showStepLine: "true",
    colorCode: "%23ADFF2F", // SatoshiMKT Primary color
  });

  return `${base}?${params.toString()}`;
}
