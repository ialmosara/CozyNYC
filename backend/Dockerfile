# Use the official Golang image to create a build artifact.
FROM golang:1.21.1 as builder

# Set the Current Working Directory inside the container.
WORKDIR /app

# Copy everything from the current directory to the Working Directory inside the container.
COPY . .

# Copy go.mod and go.sum files and download dependencies.
RUN go mod download

# Build the Go app.
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o /app/main ./cmd/server


# Use a lightweight alpine image for the runtime.
FROM alpine:latest

# Add ca-certificates in case your application makes external requests.
RUN apk --no-cache add ca-certificates

# Set the Current Working Directory inside the container.
WORKDIR /app

# Copy the pre-built binary from the builder image.
COPY --from=builder /app/main /app/main

# Run the binary.
ENTRYPOINT ["/app/main"]