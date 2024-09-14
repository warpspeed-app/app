import { createQuery } from '@farfetched/core';
import { imdb } from '@/shared/api/imdb/client';

export const movieQuery = createQuery({
    handler: async ({ id }) => {
      const response = await imdb.get('/movie');
  
      return response.json();
    },
});