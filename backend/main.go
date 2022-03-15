package main

import (
	"log"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"main.go/controllers"
	"main.go/database"
	"main.go/controllers/admincontrollers"

	"net/http"
)

func main() {

	database.GetDatabase()
	database.AuthMigration()
	router := mux.NewRouter()
	router.HandleFunc("/signup", controllers.SignUp).Methods("POST")
	router.HandleFunc("/signin", controllers.SignIn).Methods("POST")
	/*router.HandleFunc("/admin", controllers.IsAuthorized(controllers.AdminIndex)).Methods("GET")
	router.HandleFunc("/user", controllers.IsAuthorized(controllers.UserIndex)).Methods("GET")
	router.HandleFunc("/", controllers.Index).Methods("GET")*/

	router.HandleFunc("/createCategory", admincontrollers.CreateCategory).Methods("POST")

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowCredentials: true,
		AllowOriginFunc:  func(origin string) bool { return true },
		AllowedMethods:   []string{"GET", "POST", "PUT", "HEAD", "OPTIONS", "DELETE"},
		AllowedHeaders:   []string{"*"},
	})

	handler := c.Handler(router)
	err := http.ListenAndServe(":8090", handler)

	if err != nil {
		log.Fatal(err)
	}
}
