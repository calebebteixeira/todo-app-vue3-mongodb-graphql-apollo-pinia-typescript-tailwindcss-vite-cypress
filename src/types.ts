export interface Task {
  id?: string
  title: string
  description: string
  date: string
  completed: boolean
  categoryId: string
  category: string
}

export interface Tech {
  title: string
  text: string
  icon: string
  link: string
}
