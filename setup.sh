#!/bin/bash

echo "Running initial project setup..."

# Install dependencies
npm install

# Run initial commands (optional)
npm run lint || true
npm run build || true
