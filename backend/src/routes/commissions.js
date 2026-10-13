import { Router } from 'express';
import { CommissionRequest } from '../models/index.js';
import { requireAdmin } from '../middleware/auth.js';
const router=Router();
router.post('/', async(req,res,next)=>{try{const {name,email,story}=req.body||{};if(!name?.trim()||!email?.trim()||!story?.trim())return res.status(400).json({message:'Name, email and your story are required.'});if(story.length>8000)return res.status(400).json({message:'Please keep your story under 8,000 characters.'});const item=await CommissionRequest.create({...req.body,name:name.trim(),email:email.trim().toLowerCase()});res.status(201).json({message:'Thank you. Your enquiry has been received.',requestId:item.id})}catch(e){next(e)}});
router.get('/',requireAdmin,async(req,res,next)=>{try{const items=await CommissionRequest.findAll({order:[['createdAt','DESC']]});res.json({requests:items})}catch(e){next(e)}});
router.patch('/:id',requireAdmin,async(req,res,next)=>{try{const item=await CommissionRequest.findByPk(req.params.id);if(!item)return res.status(404).json({message:'Enquiry not found.'});const allowed={};for(const key of ['status','adminNotes'])if(req.body[key]!==undefined)allowed[key]=req.body[key];await item.update(allowed);res.json({request:item})}catch(e){next(e)}});
export default router;
