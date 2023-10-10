package api

import (
	"cozy-backend/api/handlers"
	"cozy-backend/internal/db"
	"os"

	"github.com/gin-gonic/gin"
)

type DBConfig struct {
	Host     string
	Port     string
	User     string
	Password string
	Name     string
}

func getDBConfig() *DBConfig {
	return &DBConfig{
		Host:     os.Getenv("DB_HOST"),
		Port:     os.Getenv("DB_PORT"),
		User:     os.Getenv("DB_USER"),
		Password: os.Getenv("DB_PASS"),
		Name:     os.Getenv("DB_NAME"),
	}
}

func SetupRoutes(r *gin.Engine) {
	config := getDBConfig()
	pgDB := db.NewGormPostgresDB(config.Host, config.Port, config.User, config.Password, config.Name)

	// Authentication routes
	r.POST("/signup", handlers.Register(pgDB))
	r.POST("/login", handlers.Login(pgDB))

	// Other routes
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello from Gin!",
		})
	})
}
