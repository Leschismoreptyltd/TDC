import React from 'react';
//import constructionCone from '../../assets/under_construction/construction hat.jpg';
import constructionCone from "../../assets/under_construction/woman_brick_layer.jpg"
const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent text-gray-700">
      <img src={constructionCone} alt="Under Construction" className="w-40 h-32 mb-4 bg-transparent" />
      <h1 className="text-4xl font-bold mb-2">Page Under Construction</h1>
      <p className="text-lg">We're working hard to get this page up and running. Check back soon!</p>
    </div>
  );
};

export default UnderConstruction;