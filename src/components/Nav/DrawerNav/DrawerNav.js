import { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Control from '../Controls/Control';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Form from '../Search-Bar/Form';
import { Link } from 'react-router-dom';
import useFetchItems from '../../../hooks/FetchItemsHook'
import ReactLoading from "react-loading";
import logo from "../../Nav/Nav-Brand/logo.png"

const DrawerNav = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const { data, isLoading } = useFetchItems('/items/categories')

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className=' flex flex-row justify-between items-center pl-3 pt-2'>
        <img src={logo} className=' h-[40px] ' alt='128auto'></img>

        <List>
          <ListItem disablePadding>
            <Control />
          </ListItem>
        </List>
      </div>
      <List>
        {
          isLoading ?
            <ReactLoading
              type="cylon"
              color="#f28a0a"
              height={100}
              width={100}
              className="m-auto mt-[250px]"
            />
            :
            data?.map((item, id) => (
              <ListItem key={id} disablePadding>
                <ListItemButton>
                  <ListItemText>
                    <Link to={`/category/${item.category}`}>{item.categoryUkr}</Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
      </List>

      <List>
        <ListItem>
          <div className="search__drawer">
            <Form />
          </div>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <Fragment>
      {['left'].map((anchor, i) => (
        <Fragment key={i} >
          {state.left ? <MenuOpenIcon fontSize='large' /> : <MenuIcon fontSize='large' onClick={toggleDrawer(anchor, true)} />}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </Fragment>
  );
}

export default DrawerNav;