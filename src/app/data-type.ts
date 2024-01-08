export interface product{
    productName: string,
    name: string,
    originalPrice: number,
    offerPrice: number,
    desc: string,
    id: number,
    image: string,
    image1: string,
    image2: string,
    image3: string,
    image4: string,
    review: number,
    reviewPhoto: string,
    quantity: undefined|number,
    productId: undefined|number
}

export interface cart{
    productName: string,
    name: string,
    originalPrice: number,
    offerPrice: number,
    desc: string,
    id: number,
    image: string,
    image1: string,
    image2: string,
    image3: string,
    image4: string,
    review: number,
    reviewPhoto: string,
    quantity: undefined|number,
    userId: number,
    productId: number
}

export interface sellerProduct{
    bname: string,
    pname: string,
    pprice: number,
    pdesc: string,
    psize: string,
    pcolor: string,
    items: undefined|number,
    url: string,
    id: number
}

export interface SignUp{
    fname: string,
    lname: string,
    aadhar: number,
    pan: string,
    phone: number,
    potp: number,
    email: string,
    eotp: number,
    peraddress: string,
    preaddress: string,
    chooseFile: string,
    file: file,
    id:number
}

export interface SignIn{
    email: string,
    password: string
}

export interface file{
    id: number,
    file: string
}

export interface PriceSummary{
    price: number,
    discount: number,
    tax: number,
    delivery: number,
    total: number,
}

export interface orderNow{
    fname: string,
    lname: string,
    email: string,
    phone: string,
    streetAddress: string,
    addressOptional: string,
    country: string,
    city: string,
    state: string,
    zip: number,
    defaultBillingAddress: string,
    price: number,
    discount: number,
    tax: number,
    delivery: number,
    total: number
    userId: string,
    id:number|undefined,
    date:string
}


