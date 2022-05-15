package sellerData

import (
	"gorm.io/gorm"
	 
)

type Productdata struct {
	gorm.Model
	Id           int                `gorm:"primaryKey" json:"id"`
	ProductTitle   string            `json:"producttitle"`
	ProductSubtitle   string         `json:"productsubtitle"`
	CategoryId   int                `json:"categoryid"`
	CategoryName string             `json:"categoryname"`        
	Imageurl     string             `json:"imageurl"`
	Description  string             `json:"description"`
	Productprice int                `json:"productprice"`
	Productquantity int             `json:"productquantity"`
}
