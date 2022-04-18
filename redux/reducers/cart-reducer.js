

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {

            let product = action.payload;

            let item = state.length > 0 ? state.find(item => item.id === product.id) : null;

            if (!item) {
                item = { ...product };

                // item.Quantity = 1;

                return [...state, item]
            }
            else {

                state.map(item => {

                    if (item.id === product.id) {
                        item.Quantity++;
                        return item;
                    }

                })
                return [...state];

            }
        }
        case 'SUB_QUANTITY': {

            let product = action.payload

            let items = state.map(item => {

                if (item.id === product.id) {
                    item.Quantity--;
                }

                return item;
            })

            return [...items];
        }
        case 'setToCart': {

            let product = action.payload

            item = { ...product };

            item.Quantity ++;


            return [...items];
        }

        case 'REMOVE_ITEM': {
            let product = action.payload

            let items = state.filter(item => {

                if (item.id !== product.id) {
                    return item;
                }
            })

            return [...items];
        }
        case 'REMOVE_ALL': {
            return []
        }
        default:
            return state;
    }


}

export default cartReducer;