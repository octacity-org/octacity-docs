import {useEffect, useState, type ReactNode} from 'react';
import styles from './styles.module.css';

interface ChecklistProps {
  /** Unique key used to remember the reader's ticks in this browser. */
  id: string;
  title?: string;
  items: string[];
}

function load(key: string): boolean[] {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as boolean[]) : [];
  } catch {
    return [];
  }
}

export default function Checklist({id, title, items}: ChecklistProps): ReactNode {
  const storageKey = `octacity-checklist:${id}`;
  const [checked, setChecked] = useState<boolean[]>([]);

  useEffect(() => {
    setChecked(load(storageKey));
  }, [storageKey]);

  const toggle = (index: number) => {
    const next = items.map((_, i) => (i === index ? !checked[i] : Boolean(checked[i])));
    setChecked(next);
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      // Storage may be unavailable (private mode); ticks just won't persist.
    }
  };

  const done = items.filter((_, i) => checked[i]).length;
  const percent = Math.round((done / items.length) * 100);

  return (
    <div className={styles.checklist}>
      <div className={styles.header}>
        <strong>{title ?? 'Kontrol listesi'}</strong>
        <span className={styles.count}>
          {done}/{items.length}
        </span>
      </div>
      <div className={styles.bar} aria-hidden="true">
        <div className={styles.fill} style={{width: `${percent}%`}} />
      </div>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={item}>
            <label className={checked[i] ? styles.done : undefined}>
              <input type="checkbox" checked={Boolean(checked[i])} onChange={() => toggle(i)} />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
      {done === items.length && <div className={styles.ready}>🎉 Hepsi tamam!</div>}
    </div>
  );
}
