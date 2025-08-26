import express from "express";
import cors from "cors";
import * as algokit from "@algorandfoundation/algokit-utils";
import algosdk from "algosdk";

const app = express();
app.use(cors());
app.use(express.json());

const algod = algokit.getAlgoClient(algokit.getDefaultLocalNetConfig("algod"));
const kmd = algokit.getAlgoKmdClient(algokit.getDefaultLocalNetConfig("kmd"));

let camilo = null;

// Create Account
app.post("/create-account", async (req, res) => {
  camilo = algosdk.generateAccount();
  res.json({
    address: camilo.addr.toString(),
    mnemonic: algosdk.secretKeyToMnemonic(camilo.sk),
  });
});

// Get Balance
app.get("/balance/:address", async (req, res) => {
  const info = await algod.accountInformation(req.params.address).do();
  res.json({ balance: Number(info.amount) / 1e6 });
});

// Fund Account (from localnet dispenser)
app.post("/fund", async (req, res) => {
  if (!camilo) return res.status(400).json({ error: "No account created" });

  await algokit.ensureFunded(
    { accountToFund: camilo, minSpendingBalance: algokit.algos(10) },
    algod,
    kmd
  );
  res.json({ message: "Account funded" });
});

app.listen(4000, () => console.log("🚀 Backend running on http://localhost:4000"));
