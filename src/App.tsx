import React, { useState } from 'react';
import './App.css';
import { UseKeyValuePairCreator } from './hook/useKeyValueCreator';

interface Generic {
  key: string;
  value: string;
}

function App() {
  const [auxArray, setAuxArray] = useState<Array<Generic>>([
    {
      key: '',
      value: '',
    },
  ]);

  const [genericObject, setGenericObject] = useState({});
  const [genericArray, setGenericArray] = useState([]);

  function onChangeKey(event: any, index: number) {
    setAuxArray((prev) => {
      prev[index] = { ...prev[index], key: event.target.value };

      return [...prev];
    });
  }

  function onChangeValue(event: any, index: number) {
    setAuxArray((prev) => {
      prev[index] = { ...prev[index], value: event.target.value };

      return [...prev];
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        {!!auxArray &&
          auxArray.map((_, index) => (
            <div>
              <input
                type="text"
                className="custom-input"
                placeholder="key..."
                value={auxArray[index].key}
                onChange={(e) => onChangeKey(e, index)}
              />
              <input
                type="text"
                className="custom-input"
                placeholder="value..."
                value={auxArray[index].value}
                onChange={(e) => onChangeValue(e, index)}
              />
              <button
                onClick={() => {
                  setGenericObject(
                    UseKeyValuePairCreator(
                      auxArray[index].key,
                      auxArray[index].value,
                      {}
                    )
                  );

                  setGenericArray(
                    UseKeyValuePairCreator(
                      auxArray[index].key,
                      auxArray[index].value,
                      []
                    )
                  );
                }}
              >
                convert values
              </button>
            </div>
          ))}
        <div>
          {!!genericArray && !!genericObject && (
            <>
              <span>{`Generic Array: ${JSON.stringify(genericArray)}`}</span>
              <br />
              <span>{`Generic Object: ${JSON.stringify(genericObject)}`}</span>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
