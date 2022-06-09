import axios from "axios";

const categoryReducer = (state,action) => {
    switch(action.type){
        case 'ADD_CATEGORY':
            axios
              .post(`http://localhost:8080/createCategory`, action.payload.category)
              .then((res) => {
                console.log(res);

                if (res.status === 201) {
                  alert("Category Add");
                } else {
                  Promise.reject();
                }
               
              })
              .catch((err) => {
                console.log(err);
              });
    }
    return{
        ...state,
    }
    
}