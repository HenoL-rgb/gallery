import {AxiosResponse} from 'axios';

import {api} from '@shared/api';
import {Photo} from '@entities/Post';

type RequestProps = {
  page: number;
  per_page: number;
  invalidate?: boolean;
};

type AdjustedHeaders = {
  'Cache-Control'?: string;
  Pragma?: string;
  Expires?: string;
};

export const getPostsRequest = async ({
  page,
  per_page,
  invalidate,
}: RequestProps): Promise<AxiosResponse<Photo[]>> => {
  const headers: AdjustedHeaders = {};

  if (invalidate) {
    headers['Cache-Control'] = 'no-cache';
    headers['Pragma'] = 'no-cache';
    headers['Expires'] = '0';
  }

  return await api.get(`photos`, {
    params: {
      page,
      per_page,
    },
    headers,
  });
};
