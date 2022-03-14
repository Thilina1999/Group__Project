package database

import (
	"fmt"
	"gorm.io/driver/mysql"
	"main.go/models/adminData"
	

	"gorm.io/gorm"
	"log"
	"main.go/models/authModels"

)

func GetDatabase() *gorm.DB {
	dsn := "root:Thilina1999@@tcp(127.0.0.1:3306)/test13?charset=utf8mb4&parseTime=True&loc=Local"

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


func Migrate( ){
	connection:= GetDatabase()
	defer CloseDatabase(connection)
	connection.AutoMigrate(adminData.Category{})
}

func CloseDatabase(connection *gorm.DB) {
	sqldb, _ := connection.DB()
	sqldb.Close()
}


func AuthMigration() {
	connection := GetDatabase()
	defer CloseDatabase(connection)
	connection.AutoMigrate(authModels.User{})
}

