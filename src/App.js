import logo from "./logo.svg";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

function App() {


  const posts =[
    {
      id:1,
      postName:"اكاديمية ترميز",
      postBody:"اكاديميه مخصصه لتعلم البرمجه",
    },
    {
      id:2,
      postName:"اكاديمية ترميز",
      postBody:"اكاديميه مخصصه لتعلم البرمجه",
    },
    {
      id:3,
      postName:"اكاديمية ترميز",
      postBody:"اكاديميه مخصصه لتعلم البرمجه",
    },
  ]

  const postList = posts.map((post)=>{
    return<Post key={post.id} postName={post.postName}/>
  })
  return (
    <div className="App">
      <Header />

      {/* POSTS CONTAINER */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
        >
          {/* == POSTS CONTAINER == */}
          <div style={{ width: "70%" }}>
          {postList}
          </div>

          <div style={{ width: "30%", marginTop: "25px" }}>
            <SideMenu />
          </div>
        </div>
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to refresh.
        </p>

        <h1>Tarmeez Academy</h1>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
