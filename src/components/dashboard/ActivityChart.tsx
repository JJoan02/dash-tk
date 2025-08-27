
import React from 'react';
import styles from './Dashboard.module.css';

export default function ActivityChart() {
    return (
        <div className={`${styles.card} ${styles.activityChart}`}>
            <h2>Activity Overview</h2>
            <div className={styles.chartContainer}>
                <p>Chart library (e.g., Recharts) will be integrated here.</p>
            </div>
        </div>
    );
}
