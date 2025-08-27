
import React from 'react';
import styles from './Dashboard.module.css';
import { FaPlus, FaDownload, FaCog, FaSync } from 'react-icons/fa';

export default function QuickActions() {
    return (
        <div className={`${styles.card} ${styles.quickActions}`}>
            <h2>Quick Actions</h2>
            <div>
                <button className={styles.quickActionBtn}><FaPlus /> Add New User</button>
                <button className={styles.quickActionBtn}><FaDownload /> Export Data</button>
                <button className={styles.quickActionBtn}><FaCog /> System Settings</button>
                <button className={styles.quickActionBtn}><FaSync /> Refresh Stats</button>
            </div>
        </div>
    );
}
