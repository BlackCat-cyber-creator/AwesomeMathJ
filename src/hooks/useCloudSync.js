import { useState, useEffect } from 'react';
import { subscribeStudents, subscribeQuests } from '../firebase/firestore';
import { getStudents, saveStudents, getQuests, saveQuests } from '../utils/storage';

/**
 * useCloudSync Hook
 * Automatically keeps students and quests synced in real-time with Cloud Firestore
 * with automatic fallback to localStorage cache when offline.
 */
export function useCloudSync(teacherId) {
  const [students, setStudents] = useState(() => getStudents());
  const [quests, setQuests] = useState(() => getQuests());
  const [isCloudConnected, setIsCloudConnected] = useState(true);

  useEffect(() => {
    const activeTeacherId = (teacherId && teacherId !== "teacher-offline")
      ? teacherId
      : "sirjevon";

    const unsubStudents = subscribeStudents(
      activeTeacherId,
      (cloudStudents) => {
        if (cloudStudents && cloudStudents.length > 0) {
          setStudents(cloudStudents);
          saveStudents(cloudStudents);
        }
        setIsCloudConnected(true);
      },
      (err) => {
        console.warn("Firestore offline / sync issue:", err);
        setIsCloudConnected(false);
      }
    );

    const unsubQuests = subscribeQuests(
      activeTeacherId,
      (cloudQuests) => {
        if (cloudQuests) {
          setQuests(cloudQuests);
          saveQuests(cloudQuests);
        }
        setIsCloudConnected(true);
      },
      (err) => {
        console.warn("Firestore quests offline / sync issue:", err);
        setIsCloudConnected(false);
      }
    );

    return () => {
      if (typeof unsubStudents === 'function') unsubStudents();
      if (typeof unsubQuests === 'function') unsubQuests();
    };
  }, [teacherId]);

  return {
    students,
    setStudents,
    quests,
    setQuests,
    isCloudConnected
  };
}

export default useCloudSync;
