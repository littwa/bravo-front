export const AndPoint = {
  auth: {
    logInManger: 'users/register',
    verifyManger: 'users/admin/verify/',
    getCurrentManger: 'users/get',
    verifyCustomer: 'users/customer/verify/',
    signInCustomer: 'users/sign-in',
    updateCustomer: 'users/up-date'
    // logInManger: 'managers/log-in/',
    // verifyManger: 'managers/verify/',
    // getCurrentManger: 'managers/get/'
  },
  orders: {
    getAllOrders: 'orders/',
    getAllOrdersAggregate: 'orders/aggregate/',
    confirmOrderStatus: 'orders/confirmed/',
    addOrder: 'orders/add',
    updateOrder: 'orders/update/'
  },
  catalog: {
    getAllProducts: 'products/',
    patchProduct: 'products/update/',
    delProduct: 'products/del/',
    addProduct: 'products/add/'
  },
  customers: {
    getAllCustomers: "customers/",
    patchCustomers: 'customers/update/',
    addCustomers: 'customers/add/',
    // delCustomers: 'customers/del/',
  }
};
// users/get
// orders/update/:orderId
