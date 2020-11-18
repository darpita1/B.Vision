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

const videobar = () => {

    const classes = useStyles();

    return (
      <Autocomplete
        id="video-select-demo"
        style={{ width: 300 }}
        options={steps}
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
            label="Choose a step"
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
  
  const steps = [
    {id: 'v_00', label: 'punjab', path: 'comp_426/media/files/punjab.mp4'},
    {id: 'v_01', label: 'bhetke', path: 'comp_426/media/files/bhetke.mp4'},
    {id: 'v_02', label: 'dhamaal', path: 'comp_426/media/files/dhamaal.mp4'},
    {id: 'v_03', label: 'sway', path: 'comp_426/media/files/sway.mp4'},
    {id: 'v_04', label: 'side punjab', path: 'comp_426/media/files/side_punjab.mp4'}
  ];


export default videobar;