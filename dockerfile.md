## Build Docker Images
Create builder
```
docker buildx create --name mybuilder --driver docker-container
```

Use builder
```
docker buildx use mybuilder
```

Build AMD image
```
docker buildx build \
  --load \
  --platform linux/amd64 \
  -t vardyng/portfolio:latest-amd .
```

Build ARM image
```sh
docker buildx build \
  --load \
  --platform linux/arm64/v8 \
  -t vardyng/portfolio:latest-arm .
```

## Publish Docker Images
### Push images to Docker Hub
```sh
docker push vardyng/portfolio:latest-amd
```

```sh
docker push vardyng/portfolio:latest-arm
```

### Combine both images into one using docker manifest
Remove existing manifest
```sh
docker manifest rm vardyng/portfolio
```

Create manifest
```sh
docker manifest create vardyng/portfolio \
  vardyng/portfolio:latest-arm \
  vardyng/portfolio:latest-amd --amend
```

Push manifest
```sh
docker manifest push vardyng/portfolio
```