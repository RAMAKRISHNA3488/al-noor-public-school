import React, { useState } from 'react';
import { ChessRecord } from '../../types';
import { Modal } from './Modal';
import { Play, RotateCcw, ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react';

interface ChessboardModalProps {
  game: ChessRecord | null;
  onClose: () => void;
}

// Initial standard chess starting position
const initialBoard = [
  ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
  ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
  ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
];

export const ChessboardModal: React.FC<ChessboardModalProps> = ({ game, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [moveStep, setMoveStep] = useState(0);

  if (!game) return null;

  const handleCopyPGN = () => {
    navigator.clipboard.writeText(game.pgn);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal
      isOpen={!!game}
      onClose={onClose}
      title={game.title}
      maxWidth="780px"
      footer={
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <div style={{ fontSize: '13px', color: '#666666' }}>
            Result: <strong style={{ color: '#172A55' }}>{game.result || 'Ongoing'}</strong>
          </div>
          <button
            onClick={onClose}
            className="btn-primary-pill"
            style={{ height: '40px', padding: '0 20px', fontSize: '14px' }}
          >
            Close Game
          </button>
        </div>
      }
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 360px) 1fr', gap: '24px' }}>
        {/* Left: 8x8 Chessboard */}
        <div>
          <div
            style={{
              width: '100%',
              aspectRatio: '1',
              display: 'grid',
              gridTemplateColumns: 'repeat(8, 1fr)',
              gridTemplateRows: 'repeat(8, 1fr)',
              border: '4px solid #1B2238',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
            }}
          >
            {initialBoard.map((row, rIdx) =>
              row.map((piece, cIdx) => {
                const isLight = (rIdx + cIdx) % 2 === 0;
                return (
                  <div
                    key={`${rIdx}-${cIdx}`}
                    style={{
                      backgroundColor: isLight ? '#EEEED2' : '#769656',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                      userSelect: 'none',
                      cursor: 'pointer',
                      transition: 'transform 0.1s'
                    }}
                  >
                    <span style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}>
                      {piece}
                    </span>
                  </div>
                );
              })
            )}
          </div>

          {/* Board Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '14px'
            }}
          >
            <button
              onClick={() => setMoveStep(0)}
              className="page-btn"
              title="Reset Board"
            >
              <RotateCcw size={16} />
            </button>
            <button
              onClick={() => setMoveStep(prev => Math.max(0, prev - 1))}
              disabled={moveStep === 0}
              className="page-btn"
              title="Previous Move"
            >
              <ChevronLeft size={18} />
            </button>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#172A55', minWidth: '80px', textAlign: 'center' }}>
              Move {moveStep}
            </span>
            <button
              onClick={() => setMoveStep(prev => prev + 1)}
              className="page-btn"
              title="Next Move"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Right: Game Info & PGN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ backgroundColor: '#F8FAFE', padding: '14px', borderRadius: '8px', border: '1px solid #E9E9E9' }}>
            <h4 style={{ fontSize: '14px', color: '#172A55', marginBottom: '8px', fontWeight: 600 }}>Game Metadata</h4>
            <div style={{ fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div><strong>White:</strong> {game.white || 'Grandmaster'}</div>
              <div><strong>Black:</strong> {game.black || 'Grandmaster'}</div>
              <div><strong>Event:</strong> {game.event || 'AL NOOR Chess Invitational'}</div>
              <div><strong>Date:</strong> {game.date || '2026-03-15'}</div>
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#172A55' }}>
                Validated PGN Moves
              </label>
              <button
                onClick={handleCopyPGN}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '12px',
                  color: '#1976ED',
                  fontWeight: 500
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Copied' : 'Copy PGN'}
              </button>
            </div>
            <textarea
              readOnly
              value={game.pgn}
              style={{
                width: '100%',
                flex: 1,
                minHeight: '160px',
                padding: '10px',
                backgroundColor: '#F8F9FE',
                border: '1px solid #E9E9E9',
                borderRadius: '6px',
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#333333',
                lineHeight: 1.4
              }}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
