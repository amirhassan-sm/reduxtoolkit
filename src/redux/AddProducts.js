import { createSlice } from "@reduxjs/toolkit"

const intialvalues = []

const addP = createSlice({
    initialState: intialvalues,
    name: "adding-to-cart",
    reducers: {
        add: (state, action) => {
            console.log(state)

            let product = [...state, action.payload]
            let numb = state.find((item) => { return item.name === action.payload.name })
            console.log(product)

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