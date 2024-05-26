import { api } from '@shared/api';
import {AxiosResponse} from 'axios';

interface RequestProps {
  id: string;
}

export const unlikePhotoRequest = async ({
  id,
}: RequestProps): Promise<AxiosResponse<void>> => {
  return await api.delete(`photos/${id}/like`);
};
