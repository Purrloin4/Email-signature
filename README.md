# Email signature

A Node.js web application serving an email signature, designed for deployment on AWS Elastic Beanstalk.

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

## AWS Elastic Beanstalk Deployment

This application is configured for deployment on AWS Elastic Beanstalk with CodePipeline.

### Deployment Structure
- `app.js` - Main Node.js application server
- `package.json` - Node.js dependencies and scripts
- `public/` - Static files including signature.html
- `.ebextensions/` - AWS Elastic Beanstalk configuration

### Endpoints
- `/` - Main email signature page
- `/signature` - Direct access to signature
- `/health` - Health check endpoint for AWS load balancer

### AWS CodePipeline Setup
1. Create a CodePipeline with this GitHub repository as source
2. Use AWS CodeBuild for build stage (optional, since this is a simple Node.js app)
3. Deploy to Elastic Beanstalk environment configured for Node.js
4. The application will be available at your Elastic Beanstalk environment URL
