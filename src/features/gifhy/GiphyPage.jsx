import { CircularProgress, Stack, TextField } from '@mui/material';
import { useGetSearchQuery } from '../../api/giphyApi';
import { useState } from 'react';
import GifhyGroup from './GyphyGroup';

export default function User() {
  const [search, setSearch] = useState('')
   const {data: searchResult, isLoading} = useGetSearchQuery(search)


  if(isLoading) {
    return <CircularProgress />
  }
  return (
    <Stack gap={10}>
    <TextField 
      id="outlined-basic" 
      label="Outlined" 
      variant="outlined" 
      value={search} 
      onChange={(value) => setSearch(value.target.value)}
    />

    <GifhyGroup data={searchResult.data}/> 
    </Stack>
  );
}


