FROM nginx:1.25.2-alpine

# Copy your custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output to the nginx HTML directory
COPY ./dist /usr/share/nginx/html

# Expose port 80
EXPOSE 3000

# Start nginx in the foreground (daemon off)
CMD ["nginx", "-g", "daemon off;"]
