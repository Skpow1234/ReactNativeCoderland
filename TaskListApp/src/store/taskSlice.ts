import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: string;
  description: string;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = { id: Math.random().toString(), description: action.payload };
      state.tasks.push(newTask);
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
