import { createSlice } from "@reduxjs/toolkit"

const intialvalues = []
let Totalprice;

const addP = createSlice({
    initialState: intialvalues,
    name: "adding-to-cart",
    reducers: {
        add: (state, action) => {
            let product = [...state, action.payload]
            let numb = state.find((item) => { return item.name === action.payload.name })

            if (numb) {
                numb.number = numb.number + 1
                numb.total = numb.total * numb.number


            }
            else {

                return state = product
            }
       
         

         


        },


    },
}
)
export const { add, } = addP.actions;
export default addP.reducer;