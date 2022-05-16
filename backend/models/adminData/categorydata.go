package adminData

import (
	"gorm.io/gorm"
)


type Category struct{
	gorm.Model
	Id int `gorm:"primaryKey" json:"id"`
	CategoryName string `json:"categoryname"`
}

