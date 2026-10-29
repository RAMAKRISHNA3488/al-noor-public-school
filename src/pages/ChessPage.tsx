import React, { useState, useMemo } from 'react';
import { Plus } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { ChessRecord } from '../types';
import { ManagementCard } from '../components/common/ManagementCard';
import { TableControls } from '../components/table/TableControls';
import { Pagination } from '../components/table/Pagination';
import { Modal } from '../components/common/Modal';
import { ChessboardModal } from '../components/common/ChessboardModal';

export const ChessPage: React.FC = () => {
  const { chessRecords, addChessRecord } = useSchool();

  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Modal states
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [activeGame, setActiveGame] = useState<ChessRecord | null>(null);

  // Form Fields
  const [gameTitle, setGameTitle] = useState('');
  const [whitePlayer, setWhitePlayer] = useState('');
  const [blackPlayer, setBlackPlayer] = useState('');
  const [pgnContent, setPgnContent] = useState('');

  // Filter & Search
  const filteredRecords = useMemo(() => {
    return chessRecords.filter(c =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.white && c.white.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (c.black && c.black.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [chessRecords, searchTerm]);

  // Pagination Slice
  const paginatedRecords = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return filteredRecords.slice(start, start + entriesPerPage);
  }, [filteredRecords, currentPage, entriesPerPage]);

  const handleOpenAdd = () => {
    setGameTitle('');
    setWhitePlayer('');
    setBlackPlayer('');
    setPgnContent('1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O');
    setIsAddOpen(true);
  };

  const handleSaveAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gameTitle.trim() || !pgnContent.trim()) return;

    addChessRecord({
      title: gameTitle,
      white: whitePlayer || 'Unknown',
      black: blackPlayer || 'Unknown',
      event: 'AL NOOR Chess Club',
      date: new Date().toISOString().split('T')[0],
      result: '*',
      pgn: pgnContent
    });

    setIsAddOpen(false);
  };

  return (
    <div>
      <ManagementCard
        title="Chess Management"
        actions={
          <button onClick={handleOpenAdd} className="btn-primary-pill">
            <Plus size={16} strokeWidth={2.5} />
            <span>Add PGN</span>
          </button>
        }
      >
        <TableControls
          entriesPerPage={entriesPerPage}
          onEntriesChange={entries => {
            setEntriesPerPage(entries);
            setCurrentPage(1);
          }}
          searchTerm={searchTerm}
          onSearchChange={term => {
            setSearchTerm(term);
            setCurrentPage(1);
          }}
        />

        <div className="table-responsive">
          <table className="alnoor-table">
            <thead>
              <tr>
                <th style={{ width: '70px', textAlign: 'center' }}>#</th>
                <th>TITLE</th>
                <th style={{ width: '140px', textAlign: 'center' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {paginatedRecords.length === 0 ? (
                <tr>
                  <td colSpan={3} style={{ textAlign: 'center', padding: '30px', color: '#888888' }}>
                    No chess records found matching "{searchTerm}"
                  </td>
                </tr>
              ) : (
                paginatedRecords.map((item, index) => {
                  const rowNumber = (currentPage - 1) * entriesPerPage + index + 1;

                  return (
                    <tr key={item.id} style={{ height: '62px' }}>
                      <td style={{ textAlign: 'center', fontWeight: 500, color: '#555555' }}>
                        {rowNumber}
                      </td>
                      <td style={{ fontSize: '14.5px', fontWeight: 500, color: '#172A55' }}>
                        <div>{item.title}</div>
                        {item.date && (
                          <span style={{ fontSize: '11px', color: '#888888', marginTop: '1px', display: 'inline-block' }}>
                            {item.event ? `${item.event} • ` : ''}Date: {item.date}
                          </span>
                        )}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <button
                          onClick={() => setActiveGame(item)}
                          className="btn-blue-rect"
                          style={{
                            width: '76px',
                            height: '36px',
                            fontSize: '13.5px',
                            fontWeight: 600
                          }}
                          title="Open Interactive Chessboard"
                        >
                          Play
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalEntries={filteredRecords.length}
          entriesPerPage={entriesPerPage}
          onPageChange={page => setCurrentPage(page)}
        />
      </ManagementCard>

      {/* Add PGN Modal */}
      <Modal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        title="Add Chess PGN Record"
        footer={
          <>
            <button
              type="button"
              onClick={() => setIsAddOpen(false)}
              style={{
                padding: '7px 15px',
                borderRadius: '5px',
                border: '1px solid #E9E9E9',
                backgroundColor: '#FFFFFF',
                color: '#333333',
                fontSize: '13px',
                fontWeight: 500
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              form="add-pgn-form"
              className="btn-primary-pill"
              style={{ height: '36px', padding: '0 20px', fontSize: '13px' }}
            >
              Save PGN Game
            </button>
          </>
        }
      >
        <form id="add-pgn-form" onSubmit={handleSaveAdd}>
          <div className="form-group">
            <label className="form-label">Game Title / Opening Name *</label>
            <input
              type="text"
              required
              value={gameTitle}
              onChange={e => setGameTitle(e.target.value)}
              placeholder="e.g. Sicilian Defense: Najdorf Variation"
              className="form-input"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div className="form-group">
              <label className="form-label">White Player</label>
              <input
                type="text"
                value={whitePlayer}
                onChange={e => setWhitePlayer(e.target.value)}
                placeholder="Magnus Carlsen"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Black Player</label>
              <input
                type="text"
                value={blackPlayer}
                onChange={e => setBlackPlayer(e.target.value)}
                placeholder="Hikaru Nakamura"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">PGN Notation / Moves *</label>
            <textarea
              required
              value={pgnContent}
              onChange={e => setPgnContent(e.target.value)}
              placeholder="1. e4 e5 2. Nf3 Nc6 3. Bb5 a6..."
              className="form-textarea"
              style={{ minHeight: '100px', fontFamily: 'monospace', fontSize: '12px' }}
            />
          </div>
        </form>
      </Modal>

      {/* Interactive Chessboard Modal */}
      {activeGame && (
        <ChessboardModal
          game={activeGame}
          onClose={() => setActiveGame(null)}
        />
      )}
    </div>
  );
};
