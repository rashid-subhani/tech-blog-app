require('dotenv').config(); // Loads .env variables

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { DataTypes } = require('sequelize');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;
const SECRET_KEY = process.env.JWT_SECRET || "fallback_secret"; // Use from .env

