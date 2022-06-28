import express from 'express'
import { AddCate, DeleteCategory, ListCategory, ListCategoryAndProduct, ListCategoryDetail, ListOneCate, UpdateCategory } from '../controllers/categorry';

const CateRouter = express.Router();

CateRouter.get('/category', ListCategory)
CateRouter.post('/category', AddCate)
CateRouter.get('/category/get-detail-by-id/:id', ListCategoryAndProduct)
CateRouter.get('/category/:id', ListOneCate)
CateRouter.delete('/category/:id', DeleteCategory)
CateRouter.put('/category/:id', UpdateCategory)

export default CateRouter