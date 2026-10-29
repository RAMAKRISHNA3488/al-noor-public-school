import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Modal } from './Modal';

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      maxWidth="480px"
      footer={
        <>
          <button
            onClick={onClose}
            style={{
              padding: '9px 18px',
              borderRadius: '6px',
              border: '1px solid #E9E9E9',
              backgroundColor: '#FFFFFF',
              color: '#333333',
              fontSize: '14px',
              fontWeight: 500
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            style={{
              padding: '9px 20px',
              borderRadius: '6px',
              backgroundColor: '#FF525F',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: 500
            }}
          >
            Delete
          </button>
        </>
      }
    >
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: '#FFEBEF',
            color: '#FF525F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          <AlertTriangle size={24} />
        </div>
        <div>
          <p style={{ fontSize: '15px', color: '#333333', lineHeight: 1.5 }}>
            {message}
          </p>
        </div>
      </div>
    </Modal>
  );
};
