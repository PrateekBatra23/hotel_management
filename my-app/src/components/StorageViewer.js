import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StorageViewer.css';

const StorageViewer = () => {
  const [storageData, setStorageData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    loadStorageData();
  }, []);

  const loadStorageData = () => {
    const allData = {};
    
    // List of all known keys from your components
    const knownKeys = [
      'users',
      'bookings',
      'laundryRequests',
      'roomCleaningRequests',
      'loggedInUser',
      'dndStatus'
    ];

    knownKeys.forEach(key => {
      try {
        const item = localStorage.getItem(key);
        if (item) {
          allData[key] = JSON.parse(item);
        }
      } catch (e) {
        allData[key] = localStorage.getItem(key);
      }
    });

    // Check for any other unexpected keys
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!knownKeys.includes(key)) {
        try {
          allData[key] = JSON.parse(localStorage.getItem(key));
        } catch {
          allData[key] = localStorage.getItem(key);
        }
      }
    }

    setStorageData(allData);
  };

  const handleClearItem = (key) => {
    if (window.confirm(`Are you sure you want to clear ${key}?`)) {
      localStorage.removeItem(key);
      loadStorageData();
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear ALL localStorage data?')) {
      localStorage.clear();
      setStorageData({});
    }
  };

  const handleRefresh = () => {
    loadStorageData();
  };

  const filteredData = Object.entries(storageData).filter(([key]) => 
    key.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderValue = (value) => {
    if (value === null || value === undefined) return 'null';
    
    if (Array.isArray(value)) {
      if (value.length === 0) return 'Empty array';
      
      return (
        <div className="array-container">
          {value.map((item, index) => (
            <div key={index} className="array-item">
              <div className="array-item-header">Item {index + 1}</div>
              {typeof item === 'object' ? (
                <pre>{JSON.stringify(item, null, 2)}</pre>
              ) : (
                <div>{String(item)}</div>
              )}
            </div>
          ))}
        </div>
      );
    }
    
    if (typeof value === 'object') {
      return <pre>{JSON.stringify(value, null, 2)}</pre>;
    }
    
    if (typeof value === 'boolean') {
      return value ? 'true' : 'false';
    }
    
    return String(value);
  };

  return (
    <div className="storage-viewer">
      <div className="storage-header">
        <h1>LocalStorage Inspector</h1>
        <div className="controls">
          <button onClick={() => navigate(-1)} className="back-button">
            ← Back
          </button>
          <button onClick={handleRefresh} className="refresh-button">
            ↻ Refresh
          </button>
          <button onClick={handleClearAll} className="clear-all-button">
            Clear All
          </button>
          <input
            type="text"
            placeholder="Search keys..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {filteredData.length === 0 ? (
        <div className="empty-state">
          {searchTerm ? 'No matching items found' : 'No data in localStorage'}
        </div>
      ) : (
        <div className="storage-items">
          {filteredData.map(([key, value]) => (
            <div key={key} className="storage-item">
              <div className="item-header">
                <h3>{key}</h3>
                <button 
                  onClick={() => handleClearItem(key)} 
                  className="clear-item-button"
                >
                  Clear
                </button>
              </div>
              <div className="item-content">
                {renderValue(value)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StorageViewer;