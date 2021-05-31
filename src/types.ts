export interface Note {
  title: string;
  description: string;
}

export interface NoteFromServer extends Note {
  createAt: {
    seconds: number;
    nanoseconds: number;
  };
  id: string;
}
