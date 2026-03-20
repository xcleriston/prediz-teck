"use client";

import { createConfig, http } from "wagmi";
import { mainnet, polygon, base } from "wagmi/chains";
import { walletConnect } from "wagmi/connectors";

/**
 * Wagmi configuration for Ethereum, Polygon, and Base.
 * Uses WalletConnect as the primary connector.
 */
export const wagmiConfig = createConfig({
  chains: [mainnet, polygon, base],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [base.id]: http(),
  },
  connectors: [
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "static-id-for-placeholder",
      metadata: {
        name: "Prediz.teck",
        description: "Prediction Market Platform",
        url: "https://prediz.teck",
        icons: ["https://prediz.teck/logo.png"],
      },
    }),
  ],
});
