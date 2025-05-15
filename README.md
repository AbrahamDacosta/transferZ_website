# 🌍 Transfer Z – FinTech for Financial Inclusion

Transfer Z is a decentralized financial platform enabling young people in West Africa to send and receive money locally and internationally — without a SIM card or a bank account.

## 🚀 Project Overview
- **Tech stack**: Next.js + Tailwind CSS + TypeScript + Sanity CMS
- **Multilingual**: English 🇬🇧 / French 🇫🇷
- **CMS**: Sanity.io for content management
- **i18n**: File-based + Sanity hybrid

## ✨ Key Features
- DID-based identification (decentralized identity)
- Blockchain + Stablecoins integration
- Mobile money interoperability
- Local + cross-border transactions
- Agent-assisted onboarding

## 📦 Installation
```bash
npm install
npm run dev
```

## 🌐 Environment Variables
Create a `.env.local` file with:
```bash
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2023-05-01
```

## 📁 Folder Structure
```
.
├── pages/
│   └── index.tsx
├── components/
│   └── Header, Hero, Problem, Solution, Impact, Team, Contact, Footer
├── public/
│   └── images/
├── src/sanity/
│   └── config, schemas
├── locales/
│   └── fr/common.json, en/common.json
```

## 🚀 Deployment on Vercel
1. Connect to your GitHub repo
2. Add environment variables in Vercel Dashboard
3. Build & deploy automatically

## 📞 Contact
**Email**: contact@transferz.org
**WhatsApp**: +225 07 87 78 51 70

---
Made with 💡 for financial empowerment in Africa.
