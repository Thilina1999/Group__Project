package routes

import (
	"github.com/gorilla/mux"
	"main.go/controllers/admincontrollers"
)

func CategoryRoute(router *mux.Router){
	router.HandleFunc("/createCategory", admincontrollers.CreateCategory).Methods("POST")
	router.HandleFunc("/getCategory", admincontrollers.GetCategory).Methods("GET")
	router.HandleFunc("/deleteCategory/{id}", admincontrollers.DeleteCategoryById).Methods("DELETE")
	router.HandleFunc("/editCategory/{id}", admincontrollers.UpdateCategoryById).Methods("PUT")
}
