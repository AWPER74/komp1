import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  const isValueValid = value.length >= 3;

  const handleInputClick = () => {
    const inputValue = prompt('Введите значение');

    if (inputValue === null) return;

    if (inputValue.length < 3) {
      setError('Введенное значение должно содержать минимум 3 символа');
    } else {
      setValue(inputValue);
      setError('');
    }
  };

  const handleAddClick = () => {
    if (!isValueValid) return;

    const newItem = {
      id: Date.now(),
      value: value,
    };

    setList([...list, newItem]);
    setValue('');
    setError('');
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.pageHeading}>Ввод значения</h1>

      <p className={styles.noMarginText}>
        Текущее значение <code>value</code>: &quot;
        <output className={styles.currentValue}>{value}</output>&quot;
      </p>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={handleInputClick}>
          Ввести новое
        </button>

        <button className={styles.button} onClick={handleAddClick} disabled={!isValueValid}>
          Добавить в список
        </button>
      </div>

      <div className={styles.listContainer}>
        <h2 className={styles.listHeading}>Список:</h2>

        {list.length === 0 ? (
          <p className={styles.noMarginText}>Нет добавленных элементов</p>
        ) : (
          <ul className={styles.list}>
            {list.map((item) => (
              <li key={item.id} className={styles.listItem}>
                {item.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
