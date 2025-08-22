#!/bin/bash

# Production Deployment Script
set -e

echo "🚀 Starting production deployment..."

# Pull latest changes
echo "📥 Pulling latest changes from git..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build the application
echo "🏗️  Building application..."
npm run build

# Optional: Run tests if they exist
if [ -f "package.json" ] && grep -q '"test"' package.json; then
    echo "🧪 Running tests..."
    npm test
fi

echo "✅ Production build completed successfully!"
echo "🌐 Ready for deployment to your hosting platform"

# Instructions for different platforms
echo ""
echo "📋 Deployment Instructions:"
echo "• Vercel: Connect your git repository for automatic deployments"
echo "• Netlify: Upload the .next folder or connect git repository"
echo "• AWS/GCP: Deploy the .next folder to your server"
echo "• Docker: Use the provided Dockerfile (if available)"
echo ""
echo "⚠️  Don't forget to set environment variables on your hosting platform!"