package sellerData

import (
	"gorm.io/gorm"
	 "main.go/models/adminData"
)

type Productdata struct {
	gorm.Model
	Id           int                `gorm:"primaryKey" json:"id"`
	Productname  string             `json:"productname"`
	CategoryId   int                `json:"categoryid"`
	Category adminData.Category       `gorm:"foreignKey:CategoryId"`          
	Imageurl     string             `json:"imageurl"`
	Description  string             `json:"description"`
	Productprice int                `json:"productprice"`
}
