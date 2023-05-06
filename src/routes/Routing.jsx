//Layout Header
import HeadOnly from '../components/Layout/HeaderOnly/HeadOnly';

import Home from '../Pages/Home/Home';
import Follow from '../Pages/Follow/Follow';
import Upload from '../Pages/Upload/Upload';

const publicRoute = [
  { path: '/', components: Home },
  { path: 'follow', components: Follow },
  { path: 'upload', components: Upload, layout: HeadOnly },
];

const privateRoute = [];

export { publicRoute, privateRoute };
