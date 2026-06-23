#!/bin/sh

echo "Running Prisma migrations..."

npx prisma migrate deploy

echo "Starting Next.js..."

node server.js