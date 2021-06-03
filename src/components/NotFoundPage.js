import React from 'react';
import { Link } from 'react-router-dom';

import { rootPath } from '../utils/strings'

const NotFoundPage = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to={rootPath}>
      Go Home
    </Link>
  </div>
);

export default NotFoundPage;
