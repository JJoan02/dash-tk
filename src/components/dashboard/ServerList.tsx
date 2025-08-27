'use client';

import React from 'react';
import styles from './Dashboard.module.css';
import { FaServer, FaCircle, FaMemory, FaMicrochip } from 'react-icons/fa';

// This interface now matches the real API response from your advanced backend
interface Server {
    id: number;
    uuid: string;
    name: string;
    ip: string;
    port: number;
    memory: number;
    disk: number;
    status: string;
    cpuUsage: string;
    ramUsage: string;
}

interface ServerListProps {
    servers: Server[];
}

export default function ServerList({ servers }: ServerListProps) {
    // Helper to determine status color, case-insensitive
    const getStatusClass = (status: string) => {
        if (typeof status !== 'string') return styles.offline;
        switch (status.toLowerCase()) {
            case 'running':
            case 'online':
            case 'starting':
                return styles.online;
            default:
                return styles.offline;
        }
    };

    return (
        <div className={styles.serverListContainer}>
            <h2 className={styles.serverListTitle}>Mis Servidores ({servers.length})</h2>
            {servers.map(server => (
                <div key={server.id} className={`card-tk ${styles.serverCard}`}>
                    <div className={styles.serverInfo}>
                        <FaServer className={styles.serverIcon} />
                        <div>
                            <h3 className={styles.serverName}>{server.name}</h3>
                            <div className={`${styles.serverStatus} ${getStatusClass(server.status)}`}>
                                <FaCircle />
                                <span>{server.status}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.serverStats}>
                        <div className={styles.serverStatItem}>
                            <span className={styles.statLabel}>IP</span>
                            <span>{server.ip}:{server.port}</span>
                        </div>
                        <div className={styles.serverStatItem}>
                            <span className={styles.statLabel}><FaMicrochip /> CPU</span>
                            <span>{server.cpuUsage}</span>
                        </div>
                        <div className={styles.serverStatItem}>
                            <span className={styles.statLabel}><FaMemory /> RAM</span>
                            <span>{server.ramUsage}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
