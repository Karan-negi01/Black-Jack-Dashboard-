import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
import './Overview.css';

const menuItems = [
  {
    title: 'Vegan Delights',
    description: 'Traditional Italian favourites made with authentic ingredients and recipes',
  },
  {
    title: 'SeaFood Extravagenza',
    description: 'A curated selection of our finest dishes crafted by our head chef',
  },
  {
    title: 'Vegan Delights',
    description: 'Traditional Italian favourites made with authentic ingredients and recipes',
  },
  {
    title: 'Gourmet Burgers',
    description: 'A delightful array of plant based dishes that are both healthy and delicious',
  },
  {
    title: 'Vegan Delights',
    description: 'Traditional Italian favourites made with authentic ingredients and recipes',
  },
  {
    title: 'Gourmet Burgers',
    description: 'A delightful array of plant based dishes that are both healthy and delicious',
  },
  {
    title: 'Gourmet Burgers',
    description: 'A delightful array of plant based dishes that are both healthy and delicious',
  },
  {
    title: 'Vegan Delights',
    description: 'Traditional Italian favourites made with authentic ingredients and recipes',
  },
  {
    title: 'SeaFood Extravagenza',
    description: 'A curated selection of our finest dishes crafted by our head chef',
  },
  {
    title: 'Vegan Delights',
    description: 'Traditional Italian favourites made with authentic ingredients and recipes',
  },

  {
    title: 'Vegan Delights',
    description: 'Traditional Italian favourites made with authentic ingredients and recipes',
  },
  // You can add more items here as needed
];

const Overview = () => {
  return (
    <div>
      <div className="overview">
        <div className="overview-header">
          <IoMdAdd className="overview-header-icons" />
          <p className="overview-header-heading">Create New Menu</p>
        </div>
        <div className="overview-content-layout">
          {menuItems.map((item, index) => (
            <div className="overview-content" key={index}>
              <div className="overview-content-box">
                <p className="overview-content-heading">{item.title}</p>
                <p className="overview-content-detail">{item.description}</p>
              </div>
              <button className="overview-content-edit">
                <CiEdit className="content-icons" />
                <p className="overview-content-button">Edit</p>
              </button>
              <button className="overview-content-delete">
                <MdDeleteOutline className="content-icons" />
                <p className="overview-content-button">Delete</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
