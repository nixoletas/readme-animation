# Replace with your Docker Hub username
$DOCKER_USERNAME = "nixoletas"
$IMAGE_NAME = "welcome"
$TAG = "latest"

# Build the image
docker build -t "${DOCKER_USERNAME}/${IMAGE_NAME}:${TAG}" .

# Push to Docker Hub
docker push "${DOCKER_USERNAME}/${IMAGE_NAME}:${TAG}" 