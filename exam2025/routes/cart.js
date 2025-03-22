// Add this route to handle clearing the cart
router.post('/clear', async (req, res) => {
    try {
        // Assuming you have user authentication and cart stored in session or database
        req.session.cart = [];
        // Or if using database: await Cart.deleteMany({ userId: req.user.id });
        res.redirect('/cart');
    } catch (error) {
        console.error(error);
        res.redirect('/cart');
    }
});