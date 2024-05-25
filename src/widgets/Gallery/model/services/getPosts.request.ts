import {AxiosResponse} from 'axios';

import {api} from '@shared/api';
import {Photo} from '@entities/Post';

type RequestProps = {
  page: number;
  per_page: number;
};

export const getPostsRequest = async ({
  page,
  per_page,
}: RequestProps): Promise<AxiosResponse<Photo[]>> => {
  return await api.get(`photos`, {
    params: {
      page,
      per_page,
    },
  });
};
