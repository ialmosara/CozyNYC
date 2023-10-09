package main

import (
	"cozy-backend/api"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	api.SetupRoutes(r)

	r.Run(":8080")
}
