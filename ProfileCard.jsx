import React from 'react';
import { FiPhone, FiVideo, FiBell, FiSlash, FiFlag, FiChevronRight } from 'react-icons/fi';

const ProfileCard = () => {
  // Dummy media items to display in the grid
  const mediaFiles = [1, 2, 3, 4];

  return (
    <div style={styles.profileContainer}>
      {/* Big User Header Info */}
      <div style={styles.profileHeader}>
        <div style={styles.avatarLarge}>👤</div>
        <h3 style={styles.profileName}>Emily Johnson</h3>
        <p style={styles.profileStatus}>Online</p>
      </div>

      {/* Quick Action Icons Bar */}
      <div style={styles.actionRow}>
        <div style={styles.actionItem}>
          <button style={styles.actionCircle}><FiPhone size={18} /></button>
          <span style={styles.actionLabel}>Voice Call</span>
        </div>
        <div style={styles.actionItem}>
          <button style={styles.actionCircle}><FiVideo size={18} /></button>
          <span style={styles.actionLabel}>Video Call</span>
        </div>
        <div style={styles.actionItem}>
          <button style={styles.actionCircle}><FiBell size={18} /></button>
          <span style={styles.actionLabel}>Mute</span>
        </div>
      </div>

      <hr style={styles.divider} />

      {/* Media, Files and Links Grid Section */}
      <div style={styles.sectionHeader}>
        <span style={styles.sectionTitle}>Media, files and links</span>
        <div style={styles.sectionMore}>
          <span>12</span>
          <FiChevronRight size={16} />
        </div>
      </div>

      <div style={styles.mediaGrid}>
        {mediaFiles.map((item) => (
          <div key={item} style={styles.mediaBox}>
            🖼️
          </div>
        ))}
      </div>

      <hr style={styles.divider} />

      {/* Settings / Privacy / Reporting Controls Options */}
      <div style={styles.optionsList}>
        <div style={styles.optionRow}>
          <div style={styles.optionInfo}>
            <FiBell size={18} color="#4b5563" />
            <span style={styles.optionText}>Mute notifications</span>
          </div>
          <input type="checkbox" style={styles.toggleSwitch} />
        </div>

        <div style={{ ...styles.optionRow, ...styles.dangerRow }}>
          <div style={styles.optionInfo}>
            <FiSlash size={18} color="#ef4444" />
            <span style={{ ...styles.optionText, color: '#ef4444' }}>Block user</span>
          </div>
        </div>

        <div style={{ ...styles.optionRow, ...styles.dangerRow }}>
          <div style={styles.optionInfo}>
            <FiFlag size={18} color="#ef4444" />
            <span style={{ ...styles.optionText, color: '#ef4444' }}>Report user</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  profileContainer: { width: '340px', height: '100vh', backgroundColor: '#fff', borderLeft: '1px solid #eaeaea', display: 'flex', flexDirection: 'column', padding: '24px' },
  profileHeader: { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '16px', marginBottom: '24px' },
  avatarLarge: { width: '96px', height: '96px', borderRadius: '50%', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '42px', marginBottom: '16px', position: 'relative' },
  profileName: { fontSize: '18px', fontWeight: '700', color: '#111827', margin: '0 0 4px 0' },
  profileStatus: { fontSize: '14px', color: '#10b981', fontWeight: '500', margin: 0 },
  actionRow: { display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '24px' },
  actionItem: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' },
  actionCircle: { width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #e5e7eb', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4b5563', cursor: 'pointer' },
  actionLabel: { fontSize: '12px', color: '#6b7280' },
  divider: { border: 0, borderTop: '1px solid #f3f4f6', margin: '16px 0' },
  sectionHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' },
  sectionTitle: { fontSize: '14px', fontWeight: '600', color: '#111827' },
  sectionMore: { display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', color: '#6b7280', cursor: 'pointer' },
  mediaGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '8px' },
  mediaBox: { aspectRatio: '1', backgroundColor: '#f3f4f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' },
  optionsList: { display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' },
  optionRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' },
  optionInfo: { display: 'flex', alignItems: 'center', gap: '12px' },
  optionText: { fontSize: '14px', fontWeight: '500', color: '#374151' },
  toggleSwitch: { cursor: 'pointer', width: '36px', height: '20px' },
  dangerRow: { paddingTop: '4px' }
};

export default ProfileCard;
        
