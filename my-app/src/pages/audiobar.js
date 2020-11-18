import React from 'react';
import Autocomplete from '@material-ui/lab/AutoComplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
  });

const audiobar = () => {

    const classes = useStyles();

    return (
      <Autocomplete
        id="audio-select-demo"
        style={{ width: 300 }}
        options={songs}
        classes={{
          option: classes.option,
        }}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(option) => (
          <React.Fragment>
  
            {option.label}
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a song"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
    );
  }
  
  const songs = [
    {id: 'a_00', label: 'Audio 1', path: 'comp_426/media/files/audio_1.mp3'},
    {id: 'a_01', label: 'Audio 1', path: 'comp_426/media/files/audio_2.mp3'},
    {id: 'a_02', label: 'Audio 3', path: 'comp_426/media/files/audio_3.mp3'},
  ];


export default audiobar;