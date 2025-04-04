This animated Readme is based on [Vittorio Retrivi's amazing work](https://codepen.io/motiontx/pen/dyGBMbb) - [his github](https://github.com/motiontx)

### Run the project with docker! 🐋

- create a directory (ex: welcome) and a compose file inside it
```bash
mkdir welcome
cd welcome
nano docker-compose.yaml
```
- paste the yaml
```yaml
services:
  web:
    image: nixoletas/welcome:latest
    ports:
      - "80:80"
    restart: unless-stopped
    environment:
      - NGINX_HOST=localhost
      - NGINX_PORT=80
```
