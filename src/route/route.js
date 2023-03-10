const router=require('express').Router()
const {createCustomer,getCustomerData,deleteCustomer}=require('../controller/customerController')
const {login,authentication, authorization}=require('../middleware/auth')
const {createCard,getAllCard}=require('../controller/cardController')



router.post('/createCustomer',createCustomer)
router.post('/login',login)
router.get('/getAllCust',getCustomerData)
router.delete('/deleteCust/:Id',authentication,authorization,deleteCustomer)



router.post('/createCard',createCard)
router.get('/getAllCard',getAllCard)

module.exports=router