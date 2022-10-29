import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from "./../assets/images/logo.png";
import { styled } from '@mui/material/styles';
import { Avatar, Badge, Fab } from '@mui/material';
import activeUser from "./../assets/images/active-user.png";
import { Link, Outlet } from 'react-router-dom';
import { drawerWidth } from '../theme/theme';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));


function SideNav(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
      <Box>
        <Box sx={{ "& img": { width: "80%" }, textAlign: "center", px: 3, py: 2 }}>
          <Link to="/"> <img src={logo} alt="" /></Link>
        </Box>
        <Divider />
        <Toolbar />
      </Box>
      <Box sx={{ "& a": { textDecoration: "none", color: "#5A5F72" } }}>
        <List>
          <Link to="users">
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 0.394196C5.6 0.394196 0 5.9942 0 12.8942C0 19.7942 5.6 25.3942 12.5 25.3942C19.4 25.3942 25 19.7942 25 12.8942C25 5.9942 19.4 0.394196 12.5 0.394196ZM6.3375 20.7442C6.875 19.6192 10.15 18.5192 12.5 18.5192C14.85 18.5192 18.1375 19.6192 18.6625 20.7442C16.9625 22.0942 14.825 22.8942 12.5 22.8942C10.175 22.8942 8.0375 22.0942 6.3375 20.7442ZM20.45 18.9317C18.6625 16.7567 14.325 16.0192 12.5 16.0192C10.675 16.0192 6.3375 16.7567 4.55 18.9317C3.275 17.2567 2.5 15.1692 2.5 12.8942C2.5 7.3817 6.9875 2.8942 12.5 2.8942C18.0125 2.8942 22.5 7.3817 22.5 12.8942C22.5 15.1692 21.725 17.2567 20.45 18.9317ZM12.5 5.3942C10.075 5.3942 8.125 7.3442 8.125 9.7692C8.125 12.1942 10.075 14.1442 12.5 14.1442C14.925 14.1442 16.875 12.1942 16.875 9.7692C16.875 7.3442 14.925 5.3942 12.5 5.3942ZM12.5 11.6442C11.4625 11.6442 10.625 10.8067 10.625 9.7692C10.625 8.7317 11.4625 7.8942 12.5 7.8942C13.5375 7.8942 14.375 8.7317 14.375 9.7692C14.375 10.8067 13.5375 11.6442 12.5 11.6442Z" fill="#5A5F72" />
                  </svg>
                </ListItemIcon>
                <ListItemText primary={"Users"} />
              </ListItemButton>
            </ListItem>
          </Link>
          <ListItem disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.2222 0.690704H2.77778C1.25 0.690704 0 1.9407 0 3.46848V13.1907C0 14.7185 1.25 15.9685 2.77778 15.9685H22.2222C23.75 15.9685 25 14.7185 25 13.1907V3.46848C25 1.9407 23.75 0.690704 22.2222 0.690704ZM2.77778 10.4129H7.125C7.41667 11.4963 8.05555 12.4546 8.88889 13.1907H2.77778V10.4129ZM22.2222 13.1907H16.1111C16.9444 12.4546 17.5833 11.4963 17.875 10.4129H22.2222V13.1907ZM22.2222 7.63515H15.2778V9.02404C15.2778 10.5101 13.9861 11.8018 12.5 11.8018C11.0139 11.8018 9.72222 10.5101 9.72222 9.02404V7.63515H2.77778V3.46848H22.2222V7.63515ZM19.4444 17.3574H15.2778V18.7463C15.2778 19.399 15.0139 19.9963 14.6111 20.4824C14.0972 21.1074 13.3333 21.524 12.5 21.524C11.6667 21.524 10.9028 21.1074 10.3889 20.4824C9.98611 19.9963 9.72222 19.399 9.72222 18.7463V17.3574H0V22.9129C0 24.4407 1.25 25.6907 2.77778 25.6907H22.2222C23.75 25.6907 25 24.4407 25 22.9129V17.3574H19.4444ZM2.77778 20.1351H7.125C7.15278 20.2601 7.20833 20.3713 7.25 20.4824C7.58333 21.4268 8.15278 22.2601 8.88889 22.9129H2.77778V20.1351ZM22.2222 22.9129H16.1111C16.8611 22.2601 17.4306 21.4268 17.75 20.4824C17.7917 20.3713 17.8472 20.2601 17.875 20.1351H22.2222V22.9129Z" fill="#5A5F72" />
                </svg>
              </ListItemIcon>
              <ListItemText primary={"Vehicles"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5842 11.5507H16.2251V7.58936H20.1864V4.94849H16.2251V0.987183H13.5842V4.94849H9.62294V7.58936H13.5842V11.5507ZM8.3025 23.4346C6.85002 23.4346 5.67483 24.623 5.67483 26.0755C5.67483 27.528 6.85002 28.7163 8.3025 28.7163C9.75498 28.7163 10.9434 27.528 10.9434 26.0755C10.9434 24.623 9.75498 23.4346 8.3025 23.4346ZM21.5069 23.4346C20.0544 23.4346 18.8792 24.623 18.8792 26.0755C18.8792 27.528 20.0544 28.7163 21.5069 28.7163C22.9593 28.7163 24.1477 27.528 24.1477 26.0755C24.1477 24.623 22.9593 23.4346 21.5069 23.4346ZM9.75498 16.8324H19.5922C20.5826 16.8324 21.454 16.291 21.903 15.4724L26.9999 6.21611L24.7023 4.94849L19.5922 14.1915H10.3228L4.69771 2.30762H0.379883V4.94849H3.02076L7.77433 14.9706L5.99174 18.1925C5.02782 19.9619 6.29544 22.1142 8.3025 22.1142H24.1477V19.4733H8.3025L9.75498 16.8324Z" fill="#5A5F72" />
                </svg>
              </ListItemIcon>
              <ListItemText primary={"Contracts"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 7.25377H18.9606C18.3138 6.17044 17.4225 5.23988 16.3444 4.53155L18.6875 2.26766L16.6606 0.309326L13.5413 3.32322C12.88 3.17044 12.2044 3.0871 11.5 3.0871C10.7956 3.0871 10.12 3.17044 9.47313 3.32322L6.33937 0.309326L4.3125 2.26766L6.64125 4.53155C5.5775 5.23988 4.68625 6.17044 4.03937 7.25377H0V10.0315H3.00438C2.9325 10.4899 2.875 10.9482 2.875 11.4204V12.8093H0V15.5871H2.875V16.976C2.875 17.4482 2.9325 17.9065 3.00438 18.3649H0V21.1427H4.03937C5.53437 23.6288 8.30875 25.3093 11.5 25.3093C14.6912 25.3093 17.4656 23.6288 18.9606 21.1427H23V18.3649H19.9956C20.0675 17.9065 20.125 17.4482 20.125 16.976V15.5871H23V12.8093H20.125V11.4204C20.125 10.9482 20.0675 10.4899 19.9956 10.0315H23V7.25377ZM17.25 12.8093V16.976C17.25 17.2815 17.2069 17.6288 17.1494 17.9482L17.0056 18.851L16.4737 19.7538C15.4388 21.476 13.5413 22.5315 11.5 22.5315C9.45875 22.5315 7.56125 21.4621 6.52625 19.7538L5.99438 18.8649L5.85062 17.9621C5.79312 17.6427 5.75 17.2954 5.75 16.976V11.4204C5.75 11.101 5.79312 10.7538 5.85062 10.4482L5.99438 9.54544L6.52625 8.64266C6.9575 7.92044 7.56125 7.29544 8.26562 6.82322L9.085 6.28155L10.1488 6.03155C10.5944 5.92044 11.0544 5.86488 11.5 5.86488C11.96 5.86488 12.4056 5.92044 12.8656 6.03155L13.8431 6.25377L14.72 6.8371C15.4387 7.30933 16.0281 7.92044 16.4594 8.65655L17.0056 9.55933L17.1494 10.4621C17.2069 10.7677 17.25 11.1149 17.25 11.4204V12.8093ZM8.625 15.5871H14.375V18.3649H8.625V15.5871ZM8.625 10.0315H14.375V12.8093H8.625V10.0315Z" fill="#636671" />
                </svg>

              </ListItemIcon>
              <ListItemText primary={"Makers"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7.4629H0V10.8915H20V7.4629ZM20 0.605759H0V4.03433H20V0.605759ZM0 17.7486H13.3333V14.32H0V17.7486ZM32.5 10.0343L35 12.6058L23.35 24.6058L15.8333 16.8915L18.3333 14.32L23.35 19.4629L32.5 10.0343Z" fill="#5A5F72" />
                </svg>
              </ListItemIcon>
              <ListItemText primary={"Vehicles"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box>
        <Toolbar />
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src={activeUser} />
            </StyledBadge>
            <Box ml={2}>
              <Typography>Jaed Al Zaber</Typography>
              <Box sx={{ bgcolor: "#232830", borderRadius: "44px", color: "#fff", textAlign: "center", mt: "5px" }}>Admin</Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Fab sx={{ boxShadow: 0 }} size='small' color='#fff' variant='circular'>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.7643 11.0338C17.8043 10.7122 17.8343 10.3906 17.8343 10.049C17.8343 9.70731 17.8043 9.38574 17.7643 9.06417L19.8743 7.40609C20.0643 7.25536 20.1143 6.98403 19.9943 6.76296L17.9943 3.28601C17.9043 3.12523 17.7343 3.03479 17.5543 3.03479C17.4943 3.03479 17.4343 3.04484 17.3843 3.06494L14.8943 4.06983C14.3743 3.66787 13.8143 3.33626 13.2043 3.08503L12.8243 0.422057C12.7943 0.180882 12.5843 0 12.3343 0H8.33431C8.08431 0 7.87431 0.180882 7.84431 0.422057L7.46431 3.08503C6.85431 3.33626 6.29431 3.67792 5.77431 4.06983L3.28431 3.06494C3.22431 3.04484 3.16431 3.03479 3.10431 3.03479C2.93431 3.03479 2.76431 3.12523 2.67431 3.28601L0.674312 6.76296C0.544312 6.98403 0.604312 7.25536 0.794312 7.40609L2.90431 9.06417C2.86431 9.38574 2.83431 9.71735 2.83431 10.049C2.83431 10.3806 2.86431 10.7122 2.90431 11.0338L0.794312 12.6919C0.604312 12.8426 0.554312 13.1139 0.674312 13.335L2.67431 16.8119C2.76431 16.9727 2.93431 17.0632 3.11431 17.0632C3.17431 17.0632 3.23431 17.0531 3.28431 17.033L5.77431 16.0281C6.29431 16.4301 6.85431 16.7617 7.46431 17.0129L7.84431 19.6759C7.87431 19.9171 8.08431 20.0979 8.33431 20.0979H12.3343C12.5843 20.0979 12.7943 19.9171 12.8243 19.6759L13.2043 17.0129C13.8143 16.7617 14.3743 16.42 14.8943 16.0281L17.3843 17.033C17.4443 17.0531 17.5043 17.0632 17.5643 17.0632C17.7343 17.0632 17.9043 16.9727 17.9943 16.8119L19.9943 13.335C20.1143 13.1139 20.0643 12.8426 19.8743 12.6919L17.7643 11.0338ZM15.7843 9.3154C15.8243 9.62691 15.8343 9.83794 15.8343 10.049C15.8343 10.26 15.8143 10.4811 15.7843 10.7825L15.6443 11.9181L16.5343 12.6215L17.6143 13.4656L16.9143 14.6815L15.6443 14.1691L14.6043 13.747L13.7043 14.4303C13.2743 14.7519 12.8643 14.9931 12.4543 15.1639L11.3943 15.596L11.2343 16.7315L11.0343 18.0881H9.63431L9.44431 16.7315L9.28431 15.596L8.22431 15.1639C7.79431 14.983 7.39431 14.7519 6.99431 14.4504L6.08431 13.747L5.02431 14.1791L3.75431 14.6916L3.05431 13.4757L4.13431 12.6316L5.02431 11.9281L4.88431 10.7926C4.85431 10.4811 4.83431 10.25 4.83431 10.049C4.83431 9.84799 4.85431 9.61687 4.88431 9.3154L5.02431 8.17986L4.13431 7.47643L3.05431 6.63232L3.75431 5.4164L5.02431 5.92889L6.06431 6.35095L6.96431 5.66762C7.39431 5.34605 7.80431 5.10488 8.21431 4.93404L9.27431 4.50194L9.43431 3.36641L9.63431 2.00979H11.0243L11.2143 3.36641L11.3743 4.50194L12.4343 4.93404C12.8643 5.11493 13.2643 5.34605 13.6643 5.64752L14.5743 6.35095L15.6343 5.91884L16.9043 5.40635L17.6043 6.62227L16.5343 7.47643L15.6443 8.17986L15.7843 9.3154ZM10.3343 6.02938C8.12431 6.02938 6.33431 7.82815 6.33431 10.049C6.33431 12.2698 8.12431 14.0686 10.3343 14.0686C12.5443 14.0686 14.3343 12.2698 14.3343 10.049C14.3343 7.82815 12.5443 6.02938 10.3343 6.02938ZM10.3343 12.0588C9.23431 12.0588 8.33431 11.1544 8.33431 10.049C8.33431 8.94358 9.23431 8.03918 10.3343 8.03918C11.4343 8.03918 12.3343 8.94358 12.3343 10.049C12.3343 11.1544 11.4343 12.0588 10.3343 12.0588Z" fill="#535561" />
              </svg>
            </Fab>
            <Fab sx={{ boxShadow: 0, ml: "5px" }} size='small'>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.56107 13.0802L8.97107 14.4971L13.9711 9.47266L8.97107 4.44818L7.56107 5.86508L10.1411 8.46777H0.471069V10.4776H10.1411L7.56107 13.0802ZM16.4711 0.428589H2.47107C1.36107 0.428589 0.471069 1.333 0.471069 2.43838V6.45797H2.47107V2.43838H16.4711V16.5069H2.47107V12.4874H0.471069V16.5069C0.471069 17.6123 1.36107 18.5167 2.47107 18.5167H16.4711C17.5711 18.5167 18.4711 17.6123 18.4711 16.5069V2.43838C18.4711 1.333 17.5711 0.428589 16.4711 0.428589Z" fill="#445FEB" />
              </svg>
            </Fab>

          </Box>
        </Box>

      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}


export default SideNav;
