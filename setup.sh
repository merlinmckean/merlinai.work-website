#!/bin/bash

echo "Running Codex environment setup..."

# Install dependencies
npm install

# Optional: fix line endings (especially on Windows)
git config --global core.autocrlf input

# Optional: run initial checks
npm run lint || true
npm run build || true
