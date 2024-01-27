import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AttachedModal } from 'react-attached-modal-portal';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const App = () => {
  const [selected, setSelected] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <AttachedModal
      isOpen={isOpen}
      buttonRect={ref.current?.getBoundingClientRect()}
      setIsOpen={setIsOpen}
      OpenModalBtn={
        <button ref={ref} onClick={() => setIsOpen(true)}>
          Open
        </button>
      }
      Header={
        <div>
          <div>
            Header
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>
        </div>
      }
    >
      <div style={{ width: '100%' }}>
        {[...new Array(selected)].map((_value, index) => (
          <div key={index}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishi
          </div>
        ))}
      </div>
      <div>
        <button autoFocus onClick={() => setSelected(0)}>
          Clear
        </button>
      </div>
    </AttachedModal>
  );
};

root.render(
  <React.StrictMode>
    <div>
      <h2>Modal Preview</h2>
    </div>
    <hr />
    <App />
  </React.StrictMode>,
);
