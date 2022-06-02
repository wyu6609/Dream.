import * as React from "react";
import { useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Navigator from "./Navigator";
import Content from "./Content/Content";
import Header from "./Header";
import Waves from "./Waves";
import axios from "axios";

let theme = createTheme({
  palette: {
    primary: {
      light: "#6320EE",
      main: "#6320EE",
      dark: "#6320EE",
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#081627",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        contained: {
          boxShadow: "none",
          "&:active": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginLeft: theme.spacing(1),
        },
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: theme.palette.common.white,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          margin: "0 16px",
          minWidth: 0,
          padding: 0,
          [theme.breakpoints.up("md")]: {
            padding: 0,
            minWidth: 0,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(255,255,255,0.15)",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#8075FF",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "inherit",
          minWidth: "auto",
          marginRight: theme.spacing(2),
          "& svg": {
            fontSize: 20,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
  },
};

const drawerWidth = 256;

//axios fetch
const pageSize = 5;

export default function Paperbase({ handleLogoutClick, user }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [dreamwall, setDreamWall] = React.useState([]);

  const [pagination, setPagination] = React.useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  React.useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelectedIndex(0);
        break;
      case "/my_dreams":
        setSelectedIndex(1);
        break;
      case "/dream_library":
        setSelectedIndex(2);
        break;
      case "/account":
        setSelectedIndex(3);
        break;
      case "/login":
        setSelectedIndex(4);
        break;
      default:
        setSelectedIndex(false);
    }

    axios.get(`/dreams`).then((res) => {
      const dreams = res.data;
      setDreamWall(dreams.slice(pagination.from, pagination.to));
      setPagination({ ...pagination, count: res.data.length });
    });
  }, []);

  React.useEffect(() => {
    axios.get(`/dreams`).then((res) => {
      const dreams = res.data;
      setDreamWall(dreams.slice(pagination.from, pagination.to));
      setPagination({ ...pagination, count: res.data.length });
    });
  }, [pagination.from, pagination.to]);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let formObj = {
      user_id: user.id,
      title: data.get("title"),
      description: data.get("description"),
    };
    // axios post

    axios
      .post("/dreams", formObj)
      .then(function (res) {
        console.log(dreamwall);
        setDreamWall([res.data, ...dreamwall.slice(0, 4)]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = (selected) => {
    console.log(selected);
    axios.delete(`/dreams/${selected}`).then((response) => {
      setDreamWall(dreamwall.filter((dream) => dream.id !== selected));
      console.log(response);
    });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //add dream modald

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <Navigator
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              user={user}
              dreamwall={dreamwall}
              setDreamWall={setDreamWall}
              handleSubmit={handleSubmit}
            />
          )}

          <Navigator
            user={user}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: "block", xs: "none" } }}
            dreamwall={dreamwall}
            setDreamWall={setDreamWall}
            handleSubmit={handleSubmit}
          />
        </Box>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Header
            onDrawerToggle={handleDrawerToggle}
            handleLogoutClick={handleLogoutClick}
          />

          <Waves
            user={user}
            dreamwall={dreamwall}
            setDreamWall={setDreamWall}
            handleDelete={handleDelete}
            pagination={pagination}
            handlePageChange={handlePageChange}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
