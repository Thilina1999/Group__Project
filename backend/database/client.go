package database

import (
	"log"
	"fmt"
	"gorm.io/gorm"
	"gorm.io/driver/mysql"
	
)


func GetDatabase() *gorm.DB {
	dsn := "root:iha075@tcp(127.0.0.1:3306)/test3?charset=utf8mb4&parseTime=True&loc=Local"

	connection, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalln("Invalid database url")
	}
	sqldb, _ := connection.DB()

	err = sqldb.Ping()
	if err != nil {
		log.Fatal("Database connected")
	}
	fmt.Println("Database connection successful.")
	return connection
}