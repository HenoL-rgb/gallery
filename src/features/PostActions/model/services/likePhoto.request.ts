import { api } from '@shared/api';
import {AxiosResponse} from 'axios';

interface RequestProps {
  id: string;
}

export const likePhotoRequest = async ({
  id,
}: RequestProps): Promise<AxiosResponse<void>> => {
  return await api.post(`photos/${id}/like`);
};
