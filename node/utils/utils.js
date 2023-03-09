import * as methods from '../services/methods';

export const cidrToMask = (req, res) => {
  let value = req.query.value ? req.query.value : false;
  if (!value) {
    res.send(422, 'No value provided' )
  } else {
    let response = {
      "function": "cidrToMask",
      "input" : value,
      "output": methods.cidrToMaskFunction(value)
    };
    res.send(response);
  }

}

//maskToCidr
export const maskToCidr = (req, res) => {
  let value = req.query.value ? req.query.value : false;
  if (!value) {
    res.send(422, 'No value provided' )
  } else {
    let response = {
      "function": "maskToCidr",
      "input" : value,
      "output": methods.maskToCidrFunction(value)   
    };
    res.send(response);
  }
}
