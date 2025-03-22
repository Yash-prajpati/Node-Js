const express = require("express");
const connectDB = require('./config/db');
const path = require("path");
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash'); // Add this line

const app = express();
const port = process.env.PORT || 9000;

// Connect to the database
connectDB();

// Basic middleware setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Session and flash setup
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));
app.use(flash()); // Add this line

// Passport setup
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// Global variables for flash messages
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

// Routes
app.use("/", require("./routes/authRoutes"));
app.use("/products", require("./routes/productRoutes"));
app.use("/cart", require("./routes/cartRoutes"));
app.use("/checkout", require("./routes/checkoutRoutes")); // Add this line

app.listen(port, () => console.log(`Server is running on port ${port}`));