/**
 * Figures transcribed from the optimizer-dynamics write-up, kept as typed
 * constants so the chart wrappers stay thin (mirrors src/components/castor/).
 */

export interface LossRow {
    /** Optimizer name. */
    label: string;
    /** Final eval loss at its tuned learning rate. */
    loss: number;
    /** Matrix-based optimizer (orthogonalized/preconditioned updates). */
    matrix: boolean;
}

/** Proxy 174M model, 6B tokens (batch 256×2048), tuned learning rate. */
export const proxyFinalLoss: LossRow[] = [
    { label: "Muon", loss: 2.983, matrix: true },
    { label: "NorMuon", loss: 2.984, matrix: true },
    { label: "SOAP", loss: 2.985, matrix: true },
    { label: "AdamW", loss: 3.015, matrix: false },
    { label: "Sophia", loss: 3.052, matrix: false },
];

/** Main 1B model, lowest-loss learning rate in the sweep. */
export const mainFinalLoss: LossRow[] = [
    { label: "Muon", loss: 2.9419, matrix: true },
    { label: "NorMuon", loss: 2.9439, matrix: true },
    { label: "SOAP", loss: 2.9545, matrix: true },
    { label: "AdamW", loss: 3.1007, matrix: false },
    { label: "Sophia", loss: 3.249, matrix: false },
];
