# Email signature

A Node.js web application serving an email signature.

## Preview

Preview my email signature here:
[![Email signature](https://img.shields.io/badge/Email%20signature-Preview-blue?style=for-the-badge&logo=appveyor)](  https://htmlpreview.github.io/?https://github.com/Purrloin4/Email-signature/blob/main/public/signature.html)

## Local Development

### Prerequisites
- Node.js (version 18 or higher)
- npm (version 8 or higher)

### Running locally
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and visit `http://localhost:3000`

### Development mode
For development with auto-reload:
```bash
npm run dev
```

## Application Structure

- `app.js` - Main Node.js application server
- `package.json` - Node.js dependencies and scripts
- `public/` - Static files including signature.html

## Endpoints

- `/` - Main email signature page
- `/signature` - Direct access to signature
- `/health` - Health check endpoint
