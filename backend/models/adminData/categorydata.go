package adminData

import (
	"gorm.io/gorm"
)


type Category struct{
	gorm.Model
	CategoryId int `gorm:"primaryKey" json:"categoryid"`
	CategoryName string `json:"categoryname"`
}

