import React from "react"

export interface IChildren { 
    children: React.ReactNode
}
export interface ITodo{
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface IUser {
    id: number
    name: string
    username: string
    email: string
    address: IAddress
    phone: string
    website: string
    company: ICompany
  }
  
  export interface IAddress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: IGeo
  }
  
  export interface IGeo {
    lat: string
    lng: string
  }
  
  export interface ICompany {
    name: string
    catchPhrase: string
    bs: string
  }
  