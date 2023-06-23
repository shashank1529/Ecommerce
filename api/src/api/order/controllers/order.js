

// Your code using the Stripe module goes here



("use strict");

// import Stripe from 'stripe';
// const stripe= new Stripe(process.env.STRIPE_KEY,{ apiVersion: '2022-11-15' });

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order');
