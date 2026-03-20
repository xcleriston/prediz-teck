"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Wallet } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Connect Wallet button with connection state management.
 * Displays truncated address when connected.
 */
export function ConnectWallet() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected && address) {
    return (
      <button 
        onClick={() => disconnect()}
        className="flex items-center gap-2 bg-[#151c2c] border border-[#242d40] px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#242d40] transition"
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        {address.slice(0, 6)}...{address.slice(-4)}
      </button>
    );
  }

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => connect({ connector: connectors[0] })}
      className="flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-lg text-xs font-bold transition shadow-[0_0_15px_rgba(173,255,47,0.2)]"
    >
      <Wallet size={14} />
      Conectar Wallet
    </motion.button>
  );
}
