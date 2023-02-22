import { Autocomplete, Stack, TextField } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { FC, useState } from 'react';
const SearchBarComponent: FC = (): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<string | null>('');
  const navigate = useNavigate();

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        value={selectedItem}
        onChange={(e: any, value: string | null) => {
          navigate(`single/${value}`);
          setSelectedItem(null);
        }}
        renderInput={(element) => (
          <TextField
            {...element}
            label="Поиск"
            InputProps={{
              ...element.InputProps,
              type: 'search',
            }}
          />
        )}
        options={['']}
      />
    </Stack>
  );
};

export default SearchBarComponent;
