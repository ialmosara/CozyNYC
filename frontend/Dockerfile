# Stage 1: Build the Vite React application
FROM node:16 as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2: Serve the Vite React application from Nginx
FROM nginx:alpine

# Copy the Vite build from Stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Use a custom nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
