# TODO - TravelBy (Login/Signup + Mongo + Booking)

## Step 1: Verify current code paths
- [x] Read app.js, db.js, routes and models

## Step 2: Implement authentication end-to-end
- [x] Update `app.js` to use `express-session`
- [x] Update `models/User.js` to hash passwords with bcrypt
- [x] Update `routes/userRoutes.js`:
  - [x] Signup: validate fields, hash password, handle duplicate emails
  - [x] Login: find user by email, compare password, create session, redirect
  - [x] Add logout route (optional, but recommended)


## Step 3: Protect booking
- [x] Update `routes/bookingRoutes.js` to require session login
- [x] Ensure booking saves only valid required fields (via schema)
- [x] Prefill booking `name/email` from session user (optional)


## Step 4: Validate booking + contact schemas
- [x] Update `models/Booking.js` and `models/Contact.js` with `required`
- [x] Update `routes/bookingRoutes.js` and `routes/contactRoutes.js` to handle missing fields


## Step 5: Fix form field names (if needed)
- [ ] Check `views/package.ejs` and/or `views/place.ejs` booking form input `name` attributes
- [ ] Update backend mapping or EJS forms so they match (`packageName`, `persons`, etc.)


## Step 6: Manual testing
- [ ] Start MongoDB
- [ ] Run `npm run dev`
- [ ] Test signup/login/booking/contact flows

