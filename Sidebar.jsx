import React from 'react';
import { FiHome, FiMessageSquare, FiPhone, FiVideo, FiUsers, FiBell, FiSettings } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      {/* App Logo & Name */}
      <div style={styles.logoSection}>
        <div style={styles.logoIcon}>💬</div>
        <span style={styles.logoText}>RandomChat</span>
      </div>

      {/* Navigation Menu */}
      <div style={styles.menuContainer}>
        <div style={{ ...styles.menuItem, ...styles.activeItem }}>
          <FiMessageSquare size={20} />
          <span>Messages</span>
        </div>
        <div style={styles.menuItem}>
          <FiPhone size={20} />
          <span>Voice Call</span>
        </div>
        <div style={styles.menuItem}>
          <FiVideo size={20} />
          <span>Video Call</span>
        </div>
        <div style={styles.menuItem}>
          <FiUsers size={20} />
          <span>People</span>
        </div>
        <div style={styles.menuItem}>
          <FiBell size={20} />
          <span>Notifications</span>
        </div>
      </div>

      {/* Settings Button at Bottom */}
      <div style={styles.bottomSection}>
        <div style={styles.menuItem}>
          <FiSettings size={20} />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  sidebar: { width: '260px', height: '100vh', backgroundColor: '#f8f9fa', display: 'flex', flexDirection: 'column', borderRight: '1px solid #eaeaea', padding: '24px 16px' },
  logoSection: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', paddingLeft: '8px' },
  logoIcon: { fontSize: '24px', backgroundColor: '#6366f1', color: '#fff', padding: '8px', borderRadius: '10px' },
  logoText: { fontSize: '20px', fontWeight: 'bold', color: '#111827' },
  menuContainer: { display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 },
  menuItem: { display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 16px', borderRadius: '12px', color: '#4b5563', fontSize: '15px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.2s' },
  activeItem: { backgroundColor: '#eef2ff', color: '#6366f1' },
  bottomSection: { marginTop: 'auto' }
};

export default Sidebar;
