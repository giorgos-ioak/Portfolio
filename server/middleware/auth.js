import jwt from 'jsonwebtoken'; 

export async function verifyToken(req, res) {
  const token = req.cookies.jwt;

  if(!token) {
    return res.status(401).json({ loggedIn: false, message: 'Unauthorized: no token provided.' });
  }

  try {
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

    if(!verifiedToken) {
      return res.status(401).json({ loggedIn: false });
    }

    res.status(200).json({ loggedIn: true });

  } catch(err) {
    console.error('Error during authentication:', err);
    res.status(500).json({ loggedIn: false, message: 'Invalid or expired token.' });
  } 
};





export async function isAuthenticated(req, res, next) {
  const token = req.cookies.jwt;

  // If there is no token, the request is unauthorized.
  if(!token) {
    return res.status(401).json({ loggedIn: false, message: 'Unauthorized: no token provided.' });
  }

  try {
    // Verify the token.
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

    // If the token is invalid, the request is unauthorized.
    if(!verifiedToken) {
      return res.status(401).json({ loggedIn: false });
    }

    // Add the user to the request object.
    req.user = verifiedToken;

    // Continue with the request.
    next();
  } catch(err) {
    console.error('Error during authentication:', err);
    res.status(500).json({ loggedIn: false, message: 'Invalid or expired token.' });
  } 
};