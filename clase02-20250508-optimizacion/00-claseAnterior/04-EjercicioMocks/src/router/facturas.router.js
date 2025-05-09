import { Router } from 'express';
import { getFacturas, mockFacturas } from '../dao/controller/facturasController.js';
export const router=Router()

router.get('/', getFacturas)
router.get("/mock", mockFacturas )