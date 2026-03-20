/**
 * LMSR (Logarithmic Market Scoring Rule) Implementation
 * Based on the spec:
 * price_yes = exp(q_yes / b) / (exp(q_yes / b) + exp(q_no / b))
 * price_no = 1 - price_yes
 */

export function calcPriceYes(qYes: number, qNo: number, b: number) {
  if (b === 0) return 0.5;
  const expYes = Math.exp(qYes / b);
  const expNo = Math.exp(qNo / b);

  return expYes / (expYes + expNo);
}

export function calcPriceNo(qYes: number, qNo: number, b: number) {
  return 1 - calcPriceYes(qYes, qNo, b);
}

/**
 * Calculates the cost of buying delta shares
 * cost = C(q_new) - C(q_old)
 * where C(q) = b * ln(exp(q_yes/b) + exp(q_no/b))
 */
export function calcCost(
  qYes: number,
  qNo: number,
  b: number,
  delta: number,
  side: "yes" | "no"
) {
  if (side === "yes") {
    const newQ = qYes + delta;
    return costFunction(newQ, qNo, b) - costFunction(qYes, qNo, b);
  } else {
    const newQ = qNo + delta;
    return costFunction(qYes, newQ, b) - costFunction(qYes, qNo, b);
  }
}

function costFunction(qYes: number, qNo: number, b: number) {
  if (b === 0) return 0;
  return b * Math.log(Math.exp(qYes / b) + Math.exp(qNo / b));
}

/**
 * Payout calculation based on average entry price
 * Simplified for now: 1 share = $1 on resolution
 */
export function calculatePayout(shares: number, outcome: "yes" | "no", betSide: "yes" | "no") {
  if (outcome === betSide) {
    return shares; // Win case
  }
  return 0; // Loss case
}
