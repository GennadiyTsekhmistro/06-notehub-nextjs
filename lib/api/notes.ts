import axios from 'axios';
import type { NotesResponse } from '@/types/note';

const api = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
});

export const fetchNotes = async (): Promise<NotesResponse> => {
  const response = await api.get<NotesResponse>('/notes');
  return response.data;
};