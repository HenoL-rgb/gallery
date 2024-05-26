import {AxiosResponse} from 'axios';

import {api} from '@shared/api';
import {Photo} from '../types/types';

type RequestProps = {
  id: string;
};

export const getPostByIdRequest = async ({
  id,
}: RequestProps): Promise<AxiosResponse<Photo>> => {
  return await api.get(`photos/${id}`);
};
