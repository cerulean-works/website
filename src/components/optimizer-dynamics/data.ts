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

/**
 * Proxy-model learning-rate sweeps: final eval loss at each peak LR, from the
 * W&B sweep grids. One entry per optimizer, ordered by learning rate.
 */
export interface LrSweep {
    optimizer: string;
    /** [peak learning rate, final eval loss] per run, ascending LR. */
    points: [number, number][];
}

export const proxyLrSweeps: LrSweep[] = [
    {
        optimizer: "NorMuon",
        points: [
            [0.00125, 3.0499],
            [0.0025, 3.0009],
            [0.005, 2.9807],
            [0.01, 2.9861],
            [0.02, 3.0014],
            [0.03, 3.0141],
            [0.04, 3.0285],
        ],
    },
    {
        optimizer: "Muon",
        points: [
            [0.00125, 3.049],
            [0.0025, 3.0045],
            [0.005, 2.985],
            [0.01, 2.9847],
            [0.02, 2.9984],
            [0.03, 3.0155],
            [0.04, 3.0297],
        ],
    },
    {
        optimizer: "SOAP",
        points: [
            [0.00025, 3.0655],
            [0.0005, 3.0096],
            [0.001, 2.9814],
            [0.002, 2.9779],
            [0.004, 2.9849],
            [0.008, 3.0085],
            [0.012, 3.033],
        ],
    },
    {
        optimizer: "AdamW",
        points: [
            [0.00025, 3.1238],
            [0.0005, 3.0504],
            [0.001, 3.0155],
            [0.001414, 3.01],
            [0.002, 3.0072],
            [0.002828, 3.0096],
            [0.003, 3.0123],
            [0.004, 3.0249],
        ],
    },
    {
        optimizer: "Sophia",
        points: [
            [0.00005, 3.1622],
            [0.0001, 3.0693],
            [0.0002, 3.0519],
            [0.0002449, 3.044],
            [0.0003, 3.0449],
            [0.0003674, 3.0578],
            [0.0004, 3.0577],
            [0.00045, 3.0642],
        ],
    },
];
