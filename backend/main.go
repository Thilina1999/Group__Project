package main

import (
	"fmt"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"log"
	"main.go/controllers"
	"main.go/database"
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
	router.Methods("OPTIONS").HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, Access-Control-Request-Headers, Access-Control-Request-Method, Connection, Host, Origin, User-Agent, Referer, Cache-Control, X-header")
	})
	fmt.Println("Server started at http://localhost:8080")
	err := http.ListenAndServe(
		":8080",
		handlers.CORS(
			handlers.AllowedHeaders([]string{"X-Requested-With", "Access-Control-Allow-Origin", "Content-Type", "Authorization"}),
			handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"}),
			handlers.AllowedOrigins([]string{"*"}),
		)(router),
	)
	if err != nil {
		log.Fatal(err)
	}
}

