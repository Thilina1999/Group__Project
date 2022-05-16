package routes


import (
	"github.com/gorilla/mux"
	"main.go/controllers/seller"
)

func ProductRoute(router *mux.Router){
	router.HandleFunc("/createProduct",seller.CreateProduct).Methods("POST")
	router.HandleFunc("/getProduct",seller.GetProduct).Methods("GET")
	router.HandleFunc("/deleteProduct/{id}",seller.DeleteProductById).Methods("DELETE")
	router.HandleFunc("/getProductbyid/{id}", seller.GetProductById).Methods("GET")
}
