import TextFieldOriginal from "@mui/material/TextField";
import FormControlOriginal from "@mui/material/FormControl";
import { styled } from '@mui/material/styles';

const yellow = "#EC983B"

const TextField = styled(TextFieldOriginal)({
  '& label.Mui-focused': {
    color: yellow,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: yellow,
    },
    '&.Mui-focused fieldset': {
      borderColor: yellow,
    },
  },
});

const FormControl = styled(FormControlOriginal)({
  '& label.Mui-focused': {
    color: yellow,
  },
  '& .MuiSelect-iconOpen' : {
    fill: yellow,
    '$:hover': {
      fill: yellow
    }
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: yellow,
    },
    '&.Mui-focused fieldset': {
      borderColor: yellow,
    },
  },
})

export {TextField, FormControl}
