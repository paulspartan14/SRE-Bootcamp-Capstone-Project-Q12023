import { protectFunction } from '../services/protected';
import { cidrToMask } from '../utils/utils'

export const getCidrToMask = (req, res) => {
  let authorization = req.headers.authorization;
  
  const getProtectedRoute = protectFunction(authorization)

  if (getProtectedRoute) {
    const getcidrToMask = cidrToMask(req, res) 
    return getcidrToMask
  } else {
    res.status(401).send({"data": "You are not allowed access"})
  }
  
}