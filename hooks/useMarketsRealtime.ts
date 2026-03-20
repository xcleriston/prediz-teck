"use client";

import { useEffect } from "react";
import { supabaseClient } from "@/lib/supabase";

/**
 * Hook to subscribe to real-time market updates via Supabase
 */
export function useMarketsRealtime(refetch: () => void) {
  useEffect(() => {
    const channel = supabaseClient
      .channel("markets-realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "markets" },
        (payload) => {
          console.log("Realtime update received:", payload);
          refetch();
        }
      )
      .subscribe();

    return () => {
      supabaseClient.removeChannel(channel);
    };
  }, [refetch]);
}
