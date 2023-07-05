import React, { useEffect, useState } from 'react';
import { URL } from './config';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useFetch from './hooks/use-fetch';

function App() {
  const [tasks, setTasks] = useState([]);

  const {isLoading,error,sendRequest:fetchTasks}=useFetch();

  useEffect(() => {
    const transformTasks=tasksObj=>{
      const loadingTasks=[];
      
      for(const taskKey in tasksObj){
        loadingTasks.push({id:taskKey,text:tasksObj[taskKey].text})
      }
      setTasks(loadingTasks)
    }
    fetchTasks({
      url:URL
    },transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
