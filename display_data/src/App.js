
import './App.css';

function App() {

  // Sample Data:
  const user ={
    name: "Chris on Code",
    location: "Las Vegas",
    foodType: "Everything",
    age: 28,
    likes: "Coding into the wee hours of the morning",
    twitterUsername: "chrisoncode",
    avatar: "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={user.avatar} alt="logo" />
        <span>{user.name}</span>
        <span>{user.location}</span>
        <span>Food: {user.foodType}</span>
        <span>Age: {user.age}</span>
        <span>Likes: {user.likes}</span>
        <span>Twitter: {user.twitterUsername}</span>
      </header>
    </div>
  );
}

export default App;
