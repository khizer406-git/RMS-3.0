export const BASE_URL = '/api';

// Auth-related endpoints
export const AUTH_ENDPOINTS = {
    LOGIN: `${BASE_URL}/public/user`,
    SIGNUP: `${BASE_URL}/public/user`,
    LOGOUT: `${BASE_URL}/auth/logout`,
    REFRESH_TOKEN: `${BASE_URL}/auth/refresh-token`
};

// User-related endpoints
export const USER_ENDPOINTS = {
    GET_PROFILE: (userId: string) => `${BASE_URL}/users/${userId}/profile`,
    UPDATE_PROFILE: (userId: string) => `${BASE_URL}/users/${userId}/profile`,
    DELETE_USER: (userId: string) => `${BASE_URL}/users/${userId}`
};

// Product-related endpoints
export const PRODUCT_ENDPOINTS = {
    GET_ALL_PRODUCTS: `${BASE_URL}/products`,
    GET_PRODUCT_DETAILS: (productId: string) => `${BASE_URL}/products/${productId}`,
    CREATE_PRODUCT: `${BASE_URL}/products`,
    UPDATE_PRODUCT: (productId: string) => `${BASE_URL}/products/${productId}`,
    DELETE_PRODUCT: (productId: string) => `${BASE_URL}/products/${productId}`
};

// Order-related endpoints
export const ORDER_ENDPOINTS = {
    CREATE_ORDER: `${BASE_URL}/orders`,
    GET_ORDER_DETAILS: (orderId: string) => `${BASE_URL}/orders/${orderId}`,
    GET_USER_ORDERS: (userId: string) => `${BASE_URL}/users/${userId}/orders`,
    UPDATE_ORDER_STATUS: (orderId: string) => `${BASE_URL}/orders/${orderId}/status`
};

// Additional example endpoint
export const EXAMPLE_ENDPOINT = `${BASE_URL}/example-endpoint`;
