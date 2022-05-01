import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const style = {
  GoogleButton: styled(Button)(() => ({
    width: '100%',
    backgroundColor: '#ffffff',
    border: '1px solid #9da6c7 !important',
    borderRadius: '2px !important',
    height: '50px !important',
    lineHeight: '50px',
    color: '#2d333a',
    fontWeight: 500,
    fontSize: '14px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    cursor: 'pointer  !important',
    '&:hover': { backgroundColor: '#9da6c7  !important' },
  })),
  GoogleIcon: styled('img')(() => ({
    width: '28px',
    marginRight: '10px',
  })),
};

export default style;
