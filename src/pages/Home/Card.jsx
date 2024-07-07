import React from "react";
import { useEffect, useState } from 'react'
import axios from "axios";

function Card(props) {

    const imageUrls = Array.from({ length: 10 }, (_, index) => `https://pub-707171ab5dd64377aa31d9db895d5b1f.r2.dev/${index + 1}.jpg`);

    return (
      
        <div className="image-gallery">

            {imageUrls.map((imageUrl, index) => (
                <div className="card">
                    <img key={index} src={imageUrl} alt={`Imagem ${index + 1}`} />
                </div>
            ))}

        </div>
    );
}

export default Card;
