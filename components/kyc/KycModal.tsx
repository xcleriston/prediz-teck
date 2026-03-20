"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * KYC Verification modal embedding Didit.me widget.
 */
export function KycModal({ isOpen, onClose }: Props) {
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
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="relative bg-[#151c2c] border border-[#242d40] p-6 rounded-2xl w-full max-w-[500px] shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-white text-xl font-fredoka font-bold">Verificação de Identidade</h2>
                <p className="text-gray-400 text-xs mt-1">Complete o KYC para liberar saques e limites maiores</p>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-white transition p-2 hover:bg-white/5 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-black/20 border border-[#242d40] flex items-center justify-center">
              {/* Didit.me Embed */}
              <iframe
                src="https://verify.didit.me"
                className="w-full h-full border-none"
                title="Didit KYC Verification"
              />
            </div>

            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
               <p className="text-[10px] text-primary font-bold uppercase tracking-wider text-center">
                 Seus dados estão protegidos e criptografados de ponta a ponta.
               </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
