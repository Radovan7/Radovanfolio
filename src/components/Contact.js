import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '@mui/material/styles';
import profile from '../profile';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { contact } = profile;
  const theme = useTheme();
  const [messageStatus, setMessageStatus] = useState(null); 

  const sendEmail = (e) => {
    e.preventDefault();

      emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((result) => {
        console.log(result.text);
        setMessageStatus({ success: true, text: 'Message sent successfully!' });
      })
      .catch((error) => {
        console.log(error.text);
        setMessageStatus({ success: false, text: 'Failed to send message. Please try again.' });
      });

    e.target.reset(); 

  };

  return (
    <Container
      maxWidth="false"
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        position: 'relative',
        zIndex: 100,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: 8,
        px: 4,
      }}
    >
      <Box width="100%" maxWidth="400px" sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          {contact.title}
        </Typography>
        <TypeAnimation
          sequence={[`${contact.description}`, 1000]}
          wrapper="span"
          cursor={true}
          repeat={0}
          style={{ display: 'inline-block', marginBottom: '20px', color: theme.palette.text.secondary, fontSize: '0.9rem' }}
        />
      </Box>

      <Box width="100%" maxWidth="400px" component="form" onSubmit={sendEmail} sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={contact.nameLabel}
              variant="outlined"
              name="from_name"
              size="small"
              sx={{
                input: { color: theme.palette.text.primary, fontSize: '0.85rem' },
                label: { color: theme.palette.text.secondary, fontSize: '0.85rem' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: theme.palette.primary.main },
                  '&:hover fieldset': { borderColor: theme.palette.primary.light },
                  '&.Mui-focused fieldset': { borderColor: theme.palette.primary.dark },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={contact.emailLabel}
              variant="outlined"
              type="email"
              name="from_email"
              size="small"
              sx={{
                input: { color: theme.palette.text.primary, fontSize: '0.85rem' },
                label: { color: theme.palette.text.secondary, fontSize: '0.85rem' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: theme.palette.primary.main },
                  '&:hover fieldset': { borderColor: theme.palette.primary.light },
                  '&.Mui-focused fieldset': { borderColor: theme.palette.primary.dark },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={contact.messageLabel}
              variant="outlined"
              multiline
              rows={4}
              name="message"
              size="small"
              sx={{
                input: { color: theme.palette.text.primary, fontSize: '0.85rem' },
                label: { color: theme.palette.text.secondary, fontSize: '0.85rem' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: theme.palette.primary.main },
                  '&:hover fieldset': { borderColor: theme.palette.primary.light },
                  '&.Mui-focused fieldset': { borderColor: theme.palette.primary.dark },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: '150px', 
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                padding: '8px 16px',
                fontSize: '0.85rem',
                '&:hover': { backgroundColor: theme.palette.primary.light },
                margin: '0 auto', 
                display: 'block',
              }}
            >
              {contact.sendButton}
            </Button>
          </Grid>
        </Grid>

        {messageStatus && (
          <Typography
            variant="body2"
            sx={{
              mt: 2,
              color: messageStatus.success ? theme.palette.success.main : theme.palette.error.main,
              textAlign: 'center',
            }}
          >
            {messageStatus.text}
          </Typography>
        )}
      </Box>

      <Typography variant="h6" sx={{ color: theme.palette.secondary.main, fontWeight: 700, mb: 1 }}>
        {contact.connectTitle}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 2, 
        }}
      >
        {contact.links.map((link, index) => (
          <IconButton
            key={index}
            component="a"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: theme.palette.icon.main,
              '&:hover': { color: theme.palette.icon.hover },
            }}
          >
            <link.icon />
          </IconButton>
        ))}
      </Box>
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          href="/CV E.pdf"
          download="CV E.pdf"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            padding: '8px 16px',
            fontSize: '0.85rem',
            '&:hover': { backgroundColor: theme.palette.primary.light },
          }}
        >
          Download CV
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
