// For Adding Items in the Cart
export const addCart=(product)=>{
    return({
        type:"ADDITEM",
        payload: product
    })
};

// For Deleting Items from the Cart
export const delCart=(product)=>{
    return({
        type:"DELITEM",
        payload: product
})
};