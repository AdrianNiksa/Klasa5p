import React, { useState } from 'react';

const data = [
    {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}
];

const categoryLabels = {
    1: 'Kwiaty',
    2: 'Zwierzęta',
    3: 'Samochody'
};

const Egzamin = () => {
    const [photos, setPhotos] = useState(data);
    const [filters, setFilters] = useState({1:true, 2:true, 3:true});

    const handleToggle = (cat) => {
        setFilters(prev => ({ ...prev, [cat]: !prev[cat] }));
    };

    const handleDownload = (id) => {
        setPhotos(prev => prev.map(p => p.id === id ? {...p, downloads: p.downloads + 1} : p));
    };

    const filteredPhotos = photos.filter(photo => filters[photo.category]);

    return (
        <>
            <style>{`
        .gallery {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: flex-start;
        }
        .gallery-item {
          flex: 0 0 32%; /* ok. 1/3 szerokości z odstępami */
          box-sizing: border-box;
          margin-bottom: 15px;
          border-radius: 8px;
          text-align: center;
          background: #f9f9f9;
          padding: 10px;
        }
        .gallery-item img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          display: block;
          margin-bottom: 8px;
        }
        button {
          cursor: pointer;
          padding: 6px 12px;
          border-radius: 4px;
          border: none;
          background-color: #007bff;
          color: white;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #0056b3;
        }
        label {
          margin-right: 15px;
          font-weight: 600;
        }
        h1 {
          margin-bottom: 15px;
        }
      `}</style>

            <div>
                <h1>Kategorie zdjęć</h1>

                <div style={{ marginBottom: '20px' }}>
                    {Object.entries(categoryLabels).map(([catId, label]) => (
                        <label key={catId}>
                            <input
                                type="checkbox"
                                checked={filters[catId]}
                                onChange={() => handleToggle(Number(catId))}
                            />
                            {label}
                        </label>
                    ))}
                </div>

                <div className="gallery">
                    {filteredPhotos.map(photo => (
                        <div key={photo.id} className="gallery-item">
                            <img src={`/assets/${photo.filename}`} alt={photo.alt} />
                            <h4>Pobrano: {photo.downloads}</h4>
                            <button onClick={() => handleDownload(photo.id)}>Pobierz</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Egzamin;
