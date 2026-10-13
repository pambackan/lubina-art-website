import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AdminUser } from '../models/index.js';
import { requireAdmin } from '../middleware/auth.js';
const router = Router();
router.post('/login', async (req,res,next) => { try { const { email, password } = req.body || {}; if (!email || !password) return res.status(400).json({message:'Email and password are required.'}); const user = await AdminUser.unscoped().findOne({ where: { email: String(email).toLowerCase().trim() } }); if (!user || !(await bcrypt.compare(password, user.passwordHash))) return res.status(401).json({message:'Incorrect email or password.'}); const token = jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '8h' }); res.json({ token, admin: { id:user.id, name:user.name, email:user.email } }); } catch(e){next(e)} });
router.get('/me', requireAdmin, async (req,res,next)=>{try{const user=await AdminUser.findByPk(req.admin.sub); if(!user)return res.status(401).json({message:'Admin account not found.'});res.json({admin:user})}catch(e){next(e)}});
export default router;
