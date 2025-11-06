import React, { useState } from 'react';
import imagesData from './data';

const categoryLabels = {
    1: 'Kwiaty',
    2: 'Zwierzęta',
    3: 'Samochody'
};

const Zadanie09 = () => {
    const [filters, setFilters] = useState({
        1: true,
        2: true,
        3: true,
    });

    const [images, setImages] = useState(imagesData);

    const toggleCategory = (cat) => {
        setFilters(prev => ({
            ...prev,
            [cat]: !prev[cat],
        }));
    };

    const increaseDownload = (id) => {
        setImages(prevImages =>
            prevImages.map(img =>
                img.id === id ? { ...img, downloads: img.downloads + 1 } : img
            )
        );
    };

    const filteredImages = images.filter(img => filters[img.category]);

    return (
        <div style={{ padding: 20, fontFamily: 'Arial' }}>
            <h1>Kategorie zdjęć</h1>
            <div style={{ marginBottom: 20 }}>
                {Object.entries(categoryLabels).map(([catId, label]) => (
                    <label key={catId} style={{ marginRight: 15 }}>
                        <input
                            type="checkbox"
                            checked={filters[catId]}
                            onChange={() => toggleCategory(Number(catId))}
                            style={{ marginRight: 5 }}
                        />
                        {label}
                    </label>
                ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {filteredImages.map(img => (
                    <div
                        key={img.id}
                        style={{
                            margin: 5,
                            border: '1px solid #ccc',
                            borderRadius: 8,
                            padding: 10,
                            textAlign: 'center',
                            width: 200,
                        }}
                    >
                        <img
                            src={`/assets/${img.filename}`}
                            alt={img.alt}
                            style={{ width: '100%', borderRadius: 8 }}
                        />
                        <h4>Pobrań: {img.downloads}</h4>
                        <button
                            onClick={() => increaseDownload(img.id)}
                            style={{
                                padding: '5px 10px',
                                borderRadius: 4,
                                border: 'none',
                                backgroundColor: '#007bff',
                                color: '#fff',
                                cursor: 'pointer',
                            }}
                        >
                            Pobierz
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Zadanie09;
