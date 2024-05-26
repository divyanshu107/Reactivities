import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import { Header } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:5000/api/avtivities')
    .then(response =>{
      setActivities(response.data)
    })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivites' />
      <h1>Reactivities</h1>
        {activities.map((activitity: any) => (
          <li key={activitity.id}>
            {activitity.title}
          </li>
        ))}
    </div>
    
  )
}

export default App
