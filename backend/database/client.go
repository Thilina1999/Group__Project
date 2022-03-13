package database

import (
	"log"

	"github.com/jinzhu/gorm"
)

var Connector *gorm.DB

func Connect(connectionString string) error {
	var err error
	Connector, err = gorm.Open("mysql", connectionString)
	if err != nil {
		return err
	}
	log.Println("Connection was successfull")
	return nil
}
func Indb() {
	config :=
		Config{
			ServerName: "localhost:3306",
			User:       "root",
			Password:   "Thilina1999@",
			DB:         "test14",
		}
	connectionString := GetConnectionString(config)

	err := Connect(connectionString)
	if err != nil {
		panic(err.Error())
	}

}
