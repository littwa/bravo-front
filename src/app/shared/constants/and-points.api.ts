export const AndPoint = {
  auth: {
    logInManger: 'users/register',
    verifyManger: 'users/admin/verify/',
    getCurrentManger: 'users/get'
    // logInManger: 'managers/log-in/',
    // verifyManger: 'managers/verify/',
    // getCurrentManger: 'managers/get/'
  },
  orders: {
    getAllOrders: 'orders/',
    getAllOrdersAggregate: 'orders/aggregate/',
    confirmOrderStatus: 'orders/confirmed/'
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
