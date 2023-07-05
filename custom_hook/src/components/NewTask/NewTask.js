import useFetch from '../../hooks/use-fetch';
import { URL } from '../../config';
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const {isLoading,error,sendRequest:sendTaskRequest}= useFetch()
  const createTask=(taskText,taskData)=>{
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }
  const enterTaskHandler = async (taskText) => {
    sendTaskRequest({
      url:URL,
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body:({ text: taskText}),
    },createTask.bind(null,taskText))

  }
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
