"use client";

import { getMoonPayUrl } from "@/lib/moonpay";
import { useAccount } from "wagmi";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal containing the MoonPay iframe for fiat-to-crypto deposits.
 */
export function DepositModal({ isOpen, onClose }: Props) {
  const { address } = useAccount();

  if (!address) return null;

  const url = getMoonPayUrl(address);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-[#151c2c] border border-[#242d40] p-6 rounded-2xl w-full max-w-[500px] overflow-hidden shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-white text-xl font-fredoka font-bold">Depositar Fondos</h2>
                <p className="text-gray-400 text-xs mt-1">Compre cripto via MoonPay com segurança</p>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-white transition p-2 hover:bg-white/5 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            <div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-black/20 border border-[#242d40]">
              <iframe
                src={url}
                className="w-full h-full border-none"
                title="MoonPay Deposit Widget"
              />
            </div>

            <p className="text-[10px] text-gray-500 text-center mt-4 uppercase tracking-widest font-bold">
              Transação processada com segurança pela MoonPay
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
