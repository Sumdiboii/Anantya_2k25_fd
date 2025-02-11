import './App.css'; // Ensure this CSS contains the global styles
import Navbar from './components/home/navbar/navbar';
import Timeline from './components/home/Timeline/Timeline';
import DescBox from "./components/home/desc-box/desc-box";



function App() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />
      <DescBox />

      {/* Space between Logo-dashboard and Timeline */}
      <div style={{ marginTop: '70px' }}>
        {/* Timeline Component */}
        <Timeline />
      </div>
    </>
  );
}

export default App;
