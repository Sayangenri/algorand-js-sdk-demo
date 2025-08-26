# 🚀 Algorand JS Demo

This project demonstrates how to integrate the **Algorand JavaScript SDK (`algosdk`)** with a simple **Node.js backend** and a **HTML/CSS/JS frontend**.  
It allows you to:

- Create a new Algorand account
- Check account balance
- Fund account from a dispenser (localnet)
- Interact with these features via a simple web frontend

---

## ⚡ Prerequisites

Make sure you have installed:

- [Node.js]
- [npm]
- Algorand **localnet**

## 💻 For Windows Users

If you are setting up on **Windows with WSL**, follow this dedicated guide:  

👉 [AlgoKit Full Setup on Windows with WSL](https://www.notion.so/AlgoKit-Full-Setup-on-Windows-with-WSL-241fe3ff0a208039a2bae351fd11d0b5)
---

## 📌 Notes

- This demo is configured for **localnet**.  
On testnet/mainnet, you’ll need to fund the account from a public faucet.  
- Mnemonics printed are for **development only**.  
⚠️ Never share real mnemonics or use them in production.

---
### 1. git clone [https://github.com/Sayangenri/algorand-js-sdk-demo.git]
cd algorand-js-demo

### 2. Setup backend
cd backend
npm init -y
npm install express cors algosdk

2. Open frontend:
- Go to `frontend/index.html` in your browser.

3. Use the UI buttons:
- **Create Account** → Generates a new Algorand account  
- **Check Balance** → Fetches account balance from Algorand node  
- **Fund 10 ALGO** → Funds account via localnet faucet  

---

## 📌 Notes

- This demo is configured for **localnet**.  
On testnet/mainnet, you’ll need to fund the account from a public faucet.  
- Mnemonics printed are for **development only**.  
⚠️ Never share real mnemonics or use them in production.

---
✅ You’re all set!  
Run the backend, open the frontend, and start playing with Algorand 🚀


