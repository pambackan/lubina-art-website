import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const AdminUser = sequelize.define('AdminUser', {
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(120), allowNull: false, defaultValue: 'Administrator' },
  email: { type: DataTypes.STRING(190), allowNull: false, unique: true, validate: { isEmail: true } },
  passwordHash: { type: DataTypes.STRING(255), allowNull: false },
}, { tableName: 'admin_users', defaultScope: { attributes: { exclude: ['passwordHash'] } }, scopes: { withPassword: { attributes: {} } } });

export const Artwork = sequelize.define('Artwork', {
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  slug: { type: DataTypes.STRING(180), allowNull: false, unique: true },
  titleEn: { type: DataTypes.STRING(180), allowNull: false }, titleDe: { type: DataTypes.STRING(180), allowNull: false },
  descriptionEn: { type: DataTypes.TEXT, allowNull: true }, descriptionDe: { type: DataTypes.TEXT, allowNull: true },
  category: { type: DataTypes.ENUM('Architecture','Interiors','Food & Everyday Life','Cities & Places','Illustration'), allowNull: false, defaultValue: 'Architecture' },
  medium: { type: DataTypes.STRING(180), allowNull: true }, size: { type: DataTypes.STRING(100), allowNull: true }, year: { type: DataTypes.INTEGER, allowNull: true },
  price: { type: DataTypes.DECIMAL(10,2), allowNull: true }, currency: { type: DataTypes.STRING(3), allowNull: false, defaultValue: 'EUR' },
  imageUrl: { type: DataTypes.STRING(500), allowNull: false }, status: { type: DataTypes.ENUM('AVAILABLE','SOLD','COMING_SOON'), allowNull: false, defaultValue: 'AVAILABLE' },
  featured: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }, sortOrder: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
}, { tableName: 'artworks' });

export const CommissionRequest = sequelize.define('CommissionRequest', {
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(160), allowNull: false }, email: { type: DataTypes.STRING(190), allowNull: false, validate: { isEmail: true } },
  commissionType: { type: DataTypes.ENUM('Wedding venue','House & home','Favourite building','Special place','Personal memory','Other'), allowNull: false, defaultValue: 'Special place' },
  placeName: { type: DataTypes.STRING(240), allowNull: true }, story: { type: DataTypes.TEXT, allowNull: false }, preferredSize: { type: DataTypes.STRING(100), allowNull: true }, isGift: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }, desiredDate: { type: DataTypes.DATEONLY, allowNull: true }, referenceImages: { type: DataTypes.JSON, allowNull: false, defaultValue: [] }, language: { type: DataTypes.ENUM('en','de'), allowNull: false, defaultValue: 'en' }, status: { type: DataTypes.ENUM('NEW','IN_PROGRESS','REPLIED','CLOSED'), allowNull: false, defaultValue: 'NEW' }, adminNotes: { type: DataTypes.TEXT, allowNull: true },
}, { tableName: 'commission_requests' });

export const Category = sequelize.define('Category', {
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  slug: { type: DataTypes.STRING(100), allowNull: false, unique: true },
  labelEn: { type: DataTypes.STRING(120), allowNull: false }, labelDe: { type: DataTypes.STRING(120), allowNull: false },
  sortOrder: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
}, { tableName: 'categories' });
