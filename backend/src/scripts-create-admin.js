import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { sequelize } from './config/database.js';
import { AdminUser } from './models/index.js';
const args=process.argv.slice(2);const val=(key)=>args[args.indexOf(key)+1];const email=val('--email');const password=val('--password');
if(!email||!password||password.length<12){console.error("Usage: npm run create-admin -- --email admin@example.com --password 'at-least-12-characters'");process.exit(1)}
try{await sequelize.authenticate();await sequelize.sync();const existing=await AdminUser.unscoped().findOne({where:{email:email.toLowerCase()}});if(existing){console.error('An admin with this email already exists.');process.exitCode=1}else{await AdminUser.create({name:'Artist Admin',email:email.toLowerCase(),passwordHash:await bcrypt.hash(password,12)});console.log('Admin account created.');}}catch(e){console.error(e.message);process.exitCode=1}finally{await sequelize.close()}
