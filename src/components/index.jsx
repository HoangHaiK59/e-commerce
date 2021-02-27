import React from 'react';
import { makeStyles, Container, AppBar, Toolbar, CssBaseline, IconButton, MenuItem, Menu, Typography, Link, Hidden, Badge } from '@material-ui/core';
import { AccountCircle, Favorite } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import StoreIcon from '@material-ui/icons/Store'
import clsx from 'clsx';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    appBar: {
        background: '#fff',
        minHeight: 88
    },
    sectionDesktop: {
        display: 'flex',
        // [theme.breakpoints.up('sm')]: {
        //   display: 'none',
        // },
        flex: 1
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    grow: {
        flexGrow: 1
    },
    icon: {
        color: '#000'
    },
    headerNavigation: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1
    },
    typography: {
        textDecoration: 'none',
    },
    headerEmpty: {
        flex: 1
    },
    hide: {
        display: 'none'
    },
    link: {
        fontSize: 18,
        fontWeight: 200,
        lineHeight: 1.5,
        textTransform: 'uppercase',
        marginLeft: theme.spacing(6),
        color: '#000',
        '&:hover': {
            textDecoration: 'none',
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuIcon: {
        color: '#000'
    },
    brand: {
        color: '#000',
        textTransform: 'uppercase'
    }
}))

const MainComponent = props => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [state, setState] = React.useState({
        left: false
    })
    const handleMobileMenuClose = event => {
        setMobileMoreAnchorEl(null)
    }
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleMenuClose = () => {
        setAnchorEl(null)
    }
    const preventDefault = (event) => event.preventDefault();
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
    );
    return <div className={classes.root}>
        <CssBaseline />
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Hidden smUp>
                    <IconButton color="inherit" edge="start" className={clsx(classes.menuButton, {
                        [classes.hide]: state.left
                    })}>
                        <MenuIcon className={classes.menuIcon} />
                    </IconButton>
                </Hidden>
                <div className={classes.headerEmpty}>
                    <Hidden smDown>
                        <IconButton color="default">
                            <StoreIcon />
                        </IconButton>
                    </Hidden>
                </div>
                <Hidden smDown>
                    <div className={classes.headerNavigation}>
                        <Typography>
                            <Link component="button" className={classes.link} href="#" onClick={preventDefault}>Shop</Link>
                        </Typography>
                        <Typography>
                            <Link component="button" className={classes.link} href="#" onClick={preventDefault}>Product</Link>
                        </Typography>
                        <Typography>
                            <Link component="button" className={classes.link} href="#" onClick={preventDefault}>Categories</Link>
                        </Typography>
                    </div>
                </Hidden>
                <div className={classes.sectionDesktop}>
                    <IconButton color="default">
                        <SearchIcon />
                    </IconButton>
                    <IconButton aria-label="show 4 new mails" color="default">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="default">
                        <Favorite />
                    </IconButton>
                    <IconButton aria-label="show 17 new notifications" color="default">
                        <Badge badgeContent={17} color="primary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="default"
                    >
                        <AccountCircle />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        <main className={classes.content}>
        </main>
        {renderMenu}
        {renderMobileMenu}
    </div>
}

export default MainComponent