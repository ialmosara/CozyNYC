package api

import (
	"cozy-backend/api/handlers"
	"cozy-backend/internal/db"

	"github.com/gin-gonic/gin"
)

//Env file for the password

func SetupRoutes(r *gin.Engine) {

	pgDB := db.NewGormPostgresDB("localhost", "5432", "username", "password", "dbname")

	r.POST("/signup", handlers.Register(pgDB))
	r.POST("/login", handlers.Login(pgDB))

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello from Gin!",
		})
	})

}
