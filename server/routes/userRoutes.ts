import {Router} from "express";
import {getCountryData} from '../controllers/userComtroller'
const router = Router()
router.get('/api/country', getCountryData)