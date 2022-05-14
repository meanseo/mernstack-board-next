import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import SvgIcon from '@mui/material/SvgIcon';

const theme = createTheme();
function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

export function AddArticle({onChange, onSubmit}){

  return (
    <ThemeProvider theme={theme}>
    <Head>
    <title>게시판| 등록</title>
    </Head>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <HomeIcon color="secondary" />
          <Typography component="h1" variant="h5">
            게시글 등록
          </Typography>

          <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={onSubmit} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} >
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  onChange={onChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="date"
                  label="date"
                  name="date"
                  autoComplete="date"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  rows={24}
                  name="title"
                  label="title"
                  type="title"
                  id="title"
                  onChange={onChange}
                />
              <Grid item xs={12}>
              <TextField
              margin="normal"
              required
              fullWidth
              name="subject"
              label="subject"
              type="subject"
              id="subject"
              multiline
              rows={10}
              autoComplete="subject"
              onChange={onChange}/>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            등록
            </Button>
            </Grid>
          </Box>
          </Box>
      </Container>
    </ThemeProvider>
  );
}

