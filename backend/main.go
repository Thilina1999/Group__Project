package main

import (
	"log"

	"fmt"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	
	"main.go/database"

	"main.go/routes"

	"net/http"
)

func main() {

	database.GetDatabase()
	database.AuthMigration()
	router := mux.NewRouter()

	

	routes.CategoryRoute(router)
	routes.InitializeAuthRoutes(router)

	fmt.Println("Server started at http://localhost:8080")
	err := http.ListenAndServe(
		":8080",
		handlers.CORS(
			handlers.AllowedHeaders([]string{"X-Requested-With", "Access-Control-Allow-Origin", "Content-Type", "Authorization"}),
			handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"}),
			handlers.AllowedOrigins([]string{"*"}),
			handlers.AllowCredentials(),
<<<<<<< HEAD
		)(router),
	)
	if err != nil {
		log.Fatal(err)
	}
=======
			
			)(router),
			
	)		



	if err != nil {
		log.Fatal(err)
	
}
>>>>>>> 8690f6470663bdb1dea90c257cf7f4495dcebf17
}