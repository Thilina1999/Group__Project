package authModels

type Token struct {
	Email       string `json:"email"`
	TokenString string `json:"token"`
}
