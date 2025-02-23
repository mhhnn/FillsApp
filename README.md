<div align="center">
  <h1>Fills.Ai</h1>
  <img src="assets/logo.png" alt="FillsApp Logo" width="50"/>
</div>



## 🔍 Overview

> Fills.ai is a simple and fast AI healthcare documentation tool for medical assistants, patients, specialists and healthcare providers saving 60% of their documentation time. 

> To learn more about this project business usecase please click on [fills.ai](https://fills.ai/)


# Table of Contents:
- [Table of Contents:](#table-of-contents)
  - [✨ Features](#-features)
  - [🚀 Tech Stack](#-tech-stack)
- [V 1.0.0 :](#v-100-)
  - [🤝 Getting Started (Prerequisites)](#-getting-started-prerequisites)
    - [Installation](#installation)
  - [🏗 Architecture](#-architecture)
      - [API Gateway Endpoints](#api-gateway-endpoints)
      - [Lambda Functions](#lambda-functions)
      - [AI Integration](#ai-integration)
      - [Database](#database)
  - [Demo](#demo)
  - [🔒 Security](#-security)
    - [Authentication \& Authorization](#authentication--authorization)
    - [Data Protection](#data-protection)
    - [API Security](#api-security)
    - [Compliance](#compliance)
  - [📄 License for FillsApp V 1.0.0](#-license-for-fillsapp-v-100)
  - [💬 Support \& Contact](#-support--contact)

  

## ✨ Features

<div align="center">

[![HIPAA Compliant](https://img.shields.io/badge/HIPAA-Compliant-success?style=for-the-badge)](https://www.hhs.gov/hipaa/index.html)
[![EHR Integration](https://img.shields.io/badge/EHR-Integration-00A3E0?style=for-the-badge&logo=health&logoColor=white)](#)
[![EPIC Compatible](https://img.shields.io/badge/EPIC-Compatible-7D2E68?style=for-the-badge&logo=epic-games&logoColor=white)](#)
[![HL7 FHIR](https://img.shields.io/badge/HL7-FHIR-E31837?style=for-the-badge&logo=health&logoColor=white)](#)

[![Secure PHI](https://img.shields.io/badge/Secure-PHI-2E8B57?style=for-the-badge&logo=security&logoColor=white)](#)
[![AI Powered](https://img.shields.io/badge/AI-Powered-FF6F61?style=for-the-badge&logo=tensorflow&logoColor=white)](#)

</div>

- 📱 **Cross-Platform** - iOS (mobile, IPad), Android, and Web support
- 🎙️ **Voice Model** - Custom trained Medical NLP model for accurate prediction. 
- 📑 **EPIC EHR Integration** - SOAP Notes, Medical Forms, Complex tables, etc just with voice.
- 🤖 **AI-Powered Form Automation** - accurate form filling with any choice of llm
- ⚡ **Real-time Processing** - Instant form filling, validating and processing
  

## 🚀 Tech Stack

<div align="center">

[![React Native](https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactnative.dev/)
[![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://svelte.dev/)
[![DynamoDB](https://img.shields.io/badge/DynamoDB-4053D6?style=for-the-badge&logo=amazon-dynamodb&logoColor=white)](https://aws.amazon.com/dynamodb/)
[![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)
[![LangChain](https://img.shields.io/badge/LangChain-121212?style=for-the-badge&logo=chainlink&logoColor=white)](https://langchain.com/)
[![Google Multimodal API](https://img.shields.io/badge/Google_Multimodal_API-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://cloud.google.com/)
[![Google Speech Medical](https://img.shields.io/badge/Speech_Medical_API-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/speech-to-text)
[![Eleven Labs](https://img.shields.io/badge/Eleven_Labs-000000?style=for-the-badge&logo=eleven&logoColor=white)](https://elevenlabs.io/)
[![AWS Transcribe Medical](https://img.shields.io/badge/AWS_Transcribe_Medical-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/transcribe/medical/)
[![LangFlow](https://img.shields.io/badge/LangFlow-00A3E0?style=for-the-badge&logo=flow&logoColor=white)](https://langflow.org/)
[![LangGraph](https://img.shields.io/badge/LangGraph-34D399?style=for-the-badge&logo=graph&logoColor=white)](https://langgraph.com/)
[![Crew AI](https://img.shields.io/badge/Crew_AI-FF4B4B?style=for-the-badge&logo=robot&logoColor=white)](https://crew.ai/)
[![Google MFA](https://img.shields.io/badge/Google_MFA-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://cloud.google.com/identity)
  [![Expo](https://img.shields.io/badge/Expo-51.0-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
  [![Firebase](https://img.shields.io/badge/Firebase-11.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![AWS](https://img.shields.io/badge/AWS-Cloud-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)
[![Lambda](https://img.shields.io/badge/Lambda-FF9900?style=for-the-badge&logo=aws-lambda&logoColor=white)](https://aws.amazon.com/lambda/)
[![API Gateway](https://img.shields.io/badge/API_Gateway-FF9900?style=for-the-badge&logo=amazon-api-gateway&logoColor=white)](https://aws.amazon.com/api-gateway/)
[![Amazon Bedrock](https://img.shields.io/badge/Amazon_Bedrock-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/bedrock/)
[![Amazon Transcribe](https://img.shields.io/badge/Amazon_Transcribe-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/transcribe/)
</div>

# V 1.0.0 : 

```mermaid
graph TB
    User((User))

    subgraph "Frontend Application"
        MobileApp["Mobile App<br>React Native/Expo"]
        
        subgraph "Frontend Components"
            AuthScreens["Auth Screens<br>React Native"]
            FormComponents["Form Components<br>React Native"]
            AppLoading["App Loading<br>React Native"]
            TemplateComponents["Template Components<br>React Native"]
            PDFGenerator["PDF Generator<br>JavaScript"]
            SpeechToText["Speech to Text<br>JavaScript"]
        end

        subgraph "State Management"
            FormDataContext["Form Data Context<br>React Context"]
            EventEmitter["Custom Event Emitter<br>TypeScript"]
        end
    end

    subgraph "Backend Services"
        APIGateway["API Gateway<br>AWS API Gateway"]
        
        subgraph "Lambda Function"
            FormHandler["Form Handler<br>Python"]
            TemplateHandler["Template Handler<br>Python"]
            AuthHandler["Auth Handler<br>Python"]
            DataProcessor["Data Processor<br>Python"]
        end

        subgraph "Data Storage"
            DynamoDB1["Form Templates DB<br>DynamoDB"]
            DynamoDB2["Filled Forms DB<br>DynamoDB"]
        end
    end

    subgraph "External Services"
        Firebase["Firebase Auth<br>Firebase"]
        OpenAI["OpenAI Service<br>GPT API"]
    end

    %% Frontend Relationships
    User -->|"Interacts with"| MobileApp
    MobileApp -->|"Uses"| AuthScreens
    MobileApp -->|"Uses"| FormComponents
    MobileApp -->|"Uses"| AppLoading
    MobileApp -->|"Uses"| TemplateComponents
    FormComponents -->|"Uses"| PDFGenerator
    FormComponents -->|"Uses"| SpeechToText
    MobileApp -->|"Uses"| FormDataContext
    FormDataContext -->|"Uses"| EventEmitter

    %% Backend Relationships
    MobileApp -->|"Authenticates"| Firebase
    MobileApp -->|"API Requests"| APIGateway
    APIGateway -->|"Routes"| FormHandler
    APIGateway -->|"Routes"| TemplateHandler
    APIGateway -->|"Routes"| AuthHandler
    
    %% Data Storage Relationships
    FormHandler -->|"CRUD Operations"| DynamoDB1
    FormHandler -->|"CRUD Operations"| DynamoDB2
    TemplateHandler -->|"CRUD Operations"| DynamoDB1
    
    %% External Service Integration
    FormHandler -->|"Text Processing"| OpenAI
    AuthHandler -->|"Verify Token"| Firebase

    %% Data Processing Flow
    FormComponents -->|"Submit Form"| FormHandler
    DataProcessor -->|"Process Form Data"| DynamoDB2
```


> This app is built with React Native, AWS Bedrock, Lambda, Dynaomodb and various other cutting edge technologies. 

> This application is therefore availabe on web, andrioid , IOS platfroms. Thanks to ReactNative, AWS, GCP.

```mermaid
graph TB
    User((User))

    subgraph "Frontend Application"
        MobileApp["Mobile App<br>React Native/Expo"]
        
        subgraph "Frontend Components"
            AuthScreens["Auth Screens<br>React Native"]
            FormComponents["Form Components<br>React Native"]
            AppLoading["App Loading<br>React Native"]
            TemplateComponents["Template Components<br>React Native"]
            PDFGenerator["PDF Generator<br>JavaScript"]
            SpeechToText["Speech to Text<br>JavaScript"]
        end

        subgraph "State Management"
            FormDataContext["Form Data Context<br>React Context"]
            EventEmitter["Custom Event Emitter<br>TypeScript"]
        end
    end

    subgraph "Backend Services"
        APIGateway["API Gateway<br>AWS API Gateway"]
        
        subgraph "Lambda Function"
            FormHandler["Form Handler<br>Python"]
            TemplateHandler["Template Handler<br>Python"]
            AuthHandler["Auth Handler<br>Python"]
            DataProcessor["Data Processor<br>Python"]
        end

        subgraph "Data Storage"
            DynamoDB1["Form Templates DB<br>DynamoDB"]
            DynamoDB2["Filled Forms DB<br>DynamoDB"]
        end
    end

    subgraph "External Services"
        Firebase["Firebase Auth<br>Firebase"]
        OpenAI["OpenAI Service<br>GPT API"]
    end

    %% Frontend Relationships
    User -->|"Interacts with"| MobileApp
    MobileApp -->|"Uses"| AuthScreens
    MobileApp -->|"Uses"| FormComponents
    MobileApp -->|"Uses"| AppLoading
    MobileApp -->|"Uses"| TemplateComponents
    FormComponents -->|"Uses"| PDFGenerator
    FormComponents -->|"Uses"| SpeechToText
    MobileApp -->|"Uses"| FormDataContext
    FormDataContext -->|"Uses"| EventEmitter

    %% Backend Relationships
    MobileApp -->|"Authenticates"| Firebase
    MobileApp -->|"API Requests"| APIGateway
    APIGateway -->|"Routes"| FormHandler
    APIGateway -->|"Routes"| TemplateHandler
    APIGateway -->|"Routes"| AuthHandler
    
    %% Data Storage Relationships
    FormHandler -->|"CRUD Operations"| DynamoDB1
    FormHandler -->|"CRUD Operations"| DynamoDB2
    TemplateHandler -->|"CRUD Operations"| DynamoDB1
    
    %% External Service Integration
    FormHandler -->|"Text Processing"| OpenAI
    AuthHandler -->|"Verify Token"| Firebase

    %% Data Processing Flow
    FormComponents -->|"Submit Form"| FormHandler
    DataProcessor -->|"Process Form Data"| DynamoDB2
```
 
## 🤝 Getting Started (Prerequisites)

1. **Development Environment**:
   - Node.js
   - npm or yarn package manager
   - Expo CLI (`expo-cli`)

2. **Mobile Development Tools**:
   - For iOS development:
     - macOS computer
     - Xcode (latest version recommended)
     - iOS Simulator or physical iOS device
   
   - For Android development:
     - Android Studio
     - Android SDK
     - Android Emulator or physical Android device

3. **Firebase Setup**:
   - Firebase account
   - Firebase project
   - Firebase configuration (the app uses Firebase Authentication)

4. **AWS Setup**:
   - AWS account
   - API Gateway endpoints (REST APIs, Websocket API) configured (as shown in `aws-config.js`)
   - SAM (IaC) Template will be provided very soon, right now all Temp API keys are availabe in the code, just follow the installation procedure.

5. **Key Dependencies** :
   - React Native (0.74.5)
   - Expo (^51.0.38)
   - React Navigation (^6.0.2)
   - Firebase (^11.0.1)
   - Various Expo packages for:
     - Audio handling (expo-av ~14.0.7)
     - Voice recognition (@react-native-voice/voice ^3.2.4)
     - File system operations (expo-modules-core ~1.12.26)
     - PDF generation (expo-print ~13.0.1, react-native-html-to-pdf ^0.12.0)
     - Gesture handling (react-native-gesture-handler ~2.16.1)

6. **Development Environment Variables**:
   - Firebase configuration
   - AWS API endpoints configuration

7. **Device Permissions**:
   The app requires several device permissions for:
   - Microphone access (for voice recording)
   - File system access (for PDF generation)
   - Camera (if using QR code scanning features)


### Installation
```bash
# Clone the repository
git clone https://github.com/mhhnn/FillsApp.git

# Navigate to project directory
cd FillsApp

# Install dependencies
pnpm i

# Start the app on ios
npx expo run:ios

# Start the app on android
npx expo run:andriod
```


## 🏗 Architecture

<div align="center">
  <img src="assets/architecture.png" alt="FillsApp Architecture"/>
  <br/>
  
</div>


#### API Gateway Endpoints
- **HTTP API**: Form submission and retrieval
- **REST API**: Template management
- **WebSocket**: Chatbox 


#### Lambda Functions
- CRUD operations for all forms, Templates.
- Firebase Authorizer authentication verification

#### AI Integration
- **Amazon Bedrock**: chatbot 
- **Amazon Transcribe**: Voice-to-text conversion


#### Database
- **DynamoDB**: Primary data storage
  - Forms table
  - Templates table
  - User profile


## Demo
<div align="center">
  <img src="assets/fillsapp.gif" alt="FillsApp Demo" width="150"/>
</div>


## 🔒 Security

### Authentication & Authorization
- Firebase Authentication for secure user management
- JWT token-based API authentication
- Automatic session management and token refresh
- Role-based access control

### Data Protection
- End-to-end encryption for all medical data
- Secure data storage using AWS Dynomo DB.
- HTTPS/TLS encryption for all API communications
- Automatic data sanitization and validation

### API Security
- Rate limiting to prevent abuse
- Input validation and sanitization
- CORS protection
- API key rotation and management

### Compliance
- HIPAA-compliant data handling


## 📄 License for FillsApp V 1.0.0

Copyright 2024 MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## 💬 Support & Contact

<div align="center">

[![Email](https://img.shields.io/badge/Email-ceo%40fills.ai-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:nithin@fills.ai)
</div>

  - website: [fills.ai](https://docs.fillsapp.com)
  - Email: nithin@fills.ai




<div align="center">
  <sub>Built with passion and ❤️ by M Hari Hara Nithin Reddy</sub>
  <br/>
  <sub>© 2024 Fills Ai LLC. All rights reserved.</sub>
</div>
