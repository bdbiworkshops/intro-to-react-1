import './App.css';
import Intro from '../Intro/Intro';

//useState is a hook that allows us to use state in a functional component
//stage management is the process of storing data in a component and updating it among components
import { useState, React } from 'react';

function App() {
  
  //array of topics that we will update and use to display
  const [topics, setTopics] = useState([]);

  //topic is the value of the input and setTopic is the function that updates the value of the input
  const [topic, setTopic] = useState([]);

  //addTopic is a function that adds the topic to the topics array
  const addTopic = () => {
    //prevTopics is the previous topics array and we are adding the topic to the end of the array
    setTopics(prevTopics => [...prevTopics, topic]);
    setTopic('');
  }
  
  return (
    <div>
      <h1>Hello!</h1>
      {/* Intro is a component that we are using. message, topic, setTopic, topics, and addTopic are properties that we are passing to the Intro component */}
      <Intro message="Happy Tuesday!" topic={topic} setTopic={setTopic} topics={topics} addTopic={addTopic}/>

      {/* displaying the topics array */}
      The topics array is: {topics.toString()}
    </div>
    
  );
}

//exporting the App component so that we can use it in other files
export default App;
