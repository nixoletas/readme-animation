FROM nginx:alpine

# Copy our web files to nginx's default public directory
COPY . /usr/share/nginx/html/

COPY mime.types /etc/nginx/mime.types

COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 