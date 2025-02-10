import './App.css'; // Ensure this CSS contains the global styles
import Navbar from './components/home/navbar/navbar';
import Timeline from './components/home/Timeline/Timeline';

function App() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Space between Navbar and Timeline */}
      <div style={{ marginTop: '70px' }}>
        {/* Timeline Component */}
        <Timeline />
      </div>
    </>
  );
}

export default App;
