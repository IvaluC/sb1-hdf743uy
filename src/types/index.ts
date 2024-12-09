export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  tags: string[];
  lastModified: Date;
}

export interface Note {
  id: string;
  courseId: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate: Date;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  courseId?: string;
}