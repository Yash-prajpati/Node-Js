const express = require('express');
const router = express.Router();

// Middleware to check if user is authenticated
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error_msg', 'Please log in to access checkout');
    res.redirect('/login');
};

// Checkout page route
router.get('/', ensureAuthenticated, (req, res) => {
    res.render('checkout', {
        title: 'Checkout',
        cartItems: req.user.cart || []
    });
});

// Process checkout
router.post('/', ensureAuthenticated, async (req, res) => {
    try {
        // Add your checkout logic here
        req.flash('success_msg', 'Order placed successfully!');
        res.redirect('/');
    } catch (error) {
        req.flash('error_msg', 'Checkout failed');
        res.redirect('/checkout');
    }
});

module.exports = router;