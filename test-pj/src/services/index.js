import request from "../config/api";

export const getListCustomer =  () => {
  return request({
    url: "customer",
    method: "GET",
  })
}

export const getListCompany = () => {
    return request({
        url: "company",
        method: "GET",
    })
}

export const getDetailCustomer = (id) => {
    return request({
        url: `customer/${id}`,
        method: "GET",
    })
}

export const getDetailCompany = (id) => {
    return request({
        url: `company/${id}`,
        method: "GET",
    })
}

export const creatCustomer = (data) => {
    return request({
        url: "customer",
        method: "POST",
        data: data
    })
}

export const createCompany = (data) => {
    return request({
        url: "company",
        method: "POST",
        data: data
    })
}

export const deleteCustomer = (data, id) => {
    return request({
        url: `customer/${id}`,
        method: "DELETE",
        data: data
    })
}

export const deleteCompany = (data, id) => {
    return request({
        url: `company/${id}`,
        method: "DELETE",
        data: data
    })
}