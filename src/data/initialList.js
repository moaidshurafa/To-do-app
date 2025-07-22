// initialize the lists with uuid 
// Each list can be an object with a unique UUID.
import { v4 as uuidv4 } from 'uuid';

// hard-coded lists Backlog, Todo Backend, Todo Frontend, In progress
// Backend, In progress Frontend, Dev Testing, Ready for QA, QA Testing, Staging,
// Production Ready, Completed

export const initialList = [
  {
    id: uuidv4(),
    name: 'Backlog',
  },
  {
    id: uuidv4(),
    name: 'Todo Backend',
  },
  {
    id: uuidv4(),
    name: 'Todo Frontend',
  },
  {
    id: uuidv4(),
    name: 'In Progress Backend',
  },
  {
    id: uuidv4(),
    name: 'In Progress Frontend',
  },
  {
    id: uuidv4(),
    name: 'Dev Testing',
  },
  {
    id: uuidv4(),
    name: 'Ready for QA',
  },
  {
    id: uuidv4(),
    name: 'QA Testing',
  },
  {
    id: uuidv4(),
    name: 'Staging',
  },
  {
    id: uuidv4(),
    name: 'Production Ready',
  },
  {
    id: uuidv4(),
    name: 'Completed',
  }
];