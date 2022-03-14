package admincontrollers

import (
	"encoding/json"

	"io/ioutil"

	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"main.go/database"
	"main.go/models/admindata"
)

func CreateCategory(w http.ResponseWriter, r *http.Request) {
	requestBody, _ := ioutil.ReadAll((r.Body))
	var category admindata.Category
	json.Unmarshal(requestBody, &category)
	database.GetDatabase().Create(&category)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(category)

}
func GetCategory(w http.ResponseWriter, r *http.Request) {
	category := []admindata.Category{}
	database.GetDatabase().Find(&category)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(category)
}

func GetCategoryById(w http.ResponseWriter, r *http.Request) {
	jer := mux.Vars(r)
	key := jer["id"]

	var category admindata.Category //this should be add category
	database.GetDatabase().First(&category, key)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(category)
}

func UpdateCategoryById(w http.ResponseWriter, r *http.Request) {
	requestBody, _ := ioutil.ReadAll(r.Body)
	var category admindata.Category
	json.Unmarshal(requestBody, &category)
	database.GetDatabase().Save(&category)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(category)
}

func DeletePersonById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["id"]

	var category admindata.Category
	id, _ := strconv.ParseInt(key, 10, 64)
	database.GetDatabase().Where("id = ?", id).Delete(&category)
	w.WriteHeader(http.StatusNoContent)
}
