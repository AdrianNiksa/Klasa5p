import React, { useEffect, useState } from 'react';

const StatusSieci = () => {
    const [status, setStatus] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => {
            console.log('Jesteś online');
            setStatus(true);
        };
        const handleOffline = () => {
            console.log('Jesteś offline');
            setStatus(false);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // Cleanup
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <div>
            <h2>Status sieci</h2>
            {status ? (
                <p style={{ color: 'green' }}>Jesteś online</p>
            ) : (
                <p style={{ color: 'grey' }}>Jesteś offline</p>
            )}
        </div>
    );
};

export default StatusSieci;
