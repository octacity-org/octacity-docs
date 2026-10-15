import {useState, type ReactNode} from 'react';
import styles from './styles.module.css';

const TYPES = ['feat', 'fix', 'docs', 'refactor', 'test', 'perf', 'chore', 'style'];

function warnings(description: string): string[] {
  const result: string[] = [];
  const text = description.trim();
  if (!text) return result;
  if (/^[A-ZÇĞİÖŞÜ]/.test(text)) result.push('Açıklamaya küçük harfle başlayın.');
  if (text.endsWith('.')) result.push('Sonuna nokta koymayın.');
  if (/^\S+(ed|es|ing)\b/i.test(text)) {
    result.push('Emir kipi kullanın: "added" / "adds" yerine "add".');
  }
  if (text.length > 72) result.push('Başlık 72 karakteri geçmesin.');
  return result;
}

export default function CommitBuilder(): ReactNode {
  const [type, setType] = useState('feat');
  const [scope, setScope] = useState('');
  const [description, setDescription] = useState('');
  const [breaking, setBreaking] = useState(false);

  const header = `${type}${scope.trim() ? `(${scope.trim()})` : ''}${breaking ? '!' : ''}: ${
    description.trim() || 'kısa açıklama'
  }`;
  const issues = warnings(description);

  return (
    <div className={styles.builder}>
      <div className={styles.fields}>
        <label>
          Tip
          <select value={type} onChange={(e) => setType(e.target.value)}>
            {TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label>
          Kapsam (isteğe bağlı)
          <input value={scope} placeholder="auth" onChange={(e) => setScope(e.target.value)} />
        </label>
        <label className={styles.wide}>
          Kısa açıklama
          <input
            value={description}
            placeholder="handle invalid password with 401 response"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" checked={breaking} onChange={(e) => setBreaking(e.target.checked)} />
          Kırıcı değişiklik (breaking change)
        </label>
      </div>
      <pre className={styles.preview}>
        <code>{header}</code>
      </pre>
      {issues.length > 0 ? (
        <ul className={styles.warnings}>
          {issues.map((w) => (
            <li key={w}>⚠️ {w}</li>
          ))}
        </ul>
      ) : (
        description.trim() && <div className={styles.ok}>✓ Biçim uygun görünüyor.</div>
      )}
    </div>
  );
}
