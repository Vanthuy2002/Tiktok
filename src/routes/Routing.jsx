import Home from '../Pages/Home/Home';
import Follow from '../Pages/Follow/Follow';

const publicRoute = [
  { path: '/', components: Home },
  { path: 'follow', components: Follow },
];

const privateRoute = [];

export { publicRoute, privateRoute };
