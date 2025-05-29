import TextInput from "./components/TextInput";
import styles from './App.module.css' 

function App() {
  return (
    <div className={styles.appContainer}>
      <TextInput maxLength={125} />
    </div>
  );
}

export default App;
