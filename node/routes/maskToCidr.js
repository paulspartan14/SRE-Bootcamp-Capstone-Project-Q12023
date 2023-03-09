import { protectFunction } from '../services/protected';
import { maskToCidr } from '../utils/utils'

export const getMaskToCidr = (req, res) => {
  let authorization = req.headers.authorization;
  
  const getProtectedRoute = protectFunction(authorization)

  if (getProtectedRoute) {
    const getmaskToCidr = maskToCidr(req, res) 
    return getmaskToCidr
  } else {
    res.status(401).send({"data": "You are not allowed access"})
  }
  
}