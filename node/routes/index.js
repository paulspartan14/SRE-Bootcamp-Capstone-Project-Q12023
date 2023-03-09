import { health } from '../services/health';
import { getMaskToCidr } from './maskToCidr';
import { getCidrToMask } from './cidrToMask';
import { login } from './login';

export const init = (app) => {
  app.post('/login', login);
  app.get('/_health', health);
  app.get('/cidr-to-mask', getCidrToMask);
  app.get('/mask-to-cidr', getMaskToCidr);
};
