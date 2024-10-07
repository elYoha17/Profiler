import { Link } from '@inertiajs/react';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Link href={route('home')}>Hello World!</Link>
    </div>
  );
}

export default Home;
