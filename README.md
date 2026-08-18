# AWS Serverless Todo Portfolio

A full-stack serverless application built with AWS Lambda, API Gateway, DynamoDB, and React.

## Architecture
`React Frontend` → `API Gateway` → `AWS Lambda` → `DynamoDB`
Infrastructure managed with `Terraform` and deployed to `S3 + CloudFront`

## Features
- ✅ Full CRUD Todo API
- ✅ Serverless backend with AWS Lambda
- ✅ REST API with API Gateway  
- ✅ NoSQL Database with DynamoDB
- ✅ Infrastructure as Code with Terraform
- ✅ React + Vite Frontend

## Tech Stack
`AWS` `Lambda` `API Gateway` `DynamoDB` `Terraform` `React` `Node.js` `S3`

## How to Run
```bash
# 1. Deploy Infrastructure
cd terraform
terraform init
terraform apply

# 2. Run Frontend Locally
cd frontend
npm install
npm run dev
