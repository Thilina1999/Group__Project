package seller

import (
	"net/http"
	"encoding/json"

	"io/ioutil"
	"main.go/database"
	"main.go/models/sellerData"
	"github.com/gorilla/mux"
	"strconv"
)

func CreateProduct(w http.ResponseWriter, r *http.Request) {
	requestBody, _ := ioutil.ReadAll((r.Body))
	var product  sellerData.Productdata 
	json.Unmarshal(requestBody, &product)
	
		 database.GetDatabase().Create(&product)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode(product)
	
}
func GetProduct(w http.ResponseWriter, r *http.Request) {
	product := []sellerData.Productdata{}
	database.GetDatabase().Find(&product)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(product)
}
func DeleteProductById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["id"]

	var product  sellerData.Productdata
	id, _ := strconv.ParseInt(key, 10, 64)
	database.GetDatabase().Where("id = ?", id).Delete(&product)
	w.WriteHeader(http.StatusNoContent)
}
func GetProductById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["id"]

	var product  sellerData.Productdata //this should be add product
	
	database.GetDatabase().First(&product, key)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(product)
}