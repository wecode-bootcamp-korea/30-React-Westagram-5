import React from 'react';
import { MdOutlineExplore } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

function Nav() {
  return (
    <nav className="nav">
      <h3 className="logo">Westagram</h3>
      <input className="nav-searchbar" type="text" placeholder="Search" />
      <div className="nav-icons">
        <MdOutlineExplore />
        <FiHeart />
        <CgProfile />
      </div>
    </nav>
  );
}

export default Nav;
