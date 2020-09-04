
  import React from 'react';
  import PropTypes from 'prop-types';
  import Color from 'color';
  import { makeStyles } from '@material-ui/styles';
  import Tabs from '@material-ui/core/Tabs';
  import Tab from '@material-ui/core/Tab';
  import {Link} from "react-router-dom"
  const useTabsStyles = makeStyles(() => ({
    indicator: {
      display: 'none',
    },
  }));
  
  const useTabStyles = makeStyles(({ palette, spacing, breakpoints }) => {
    const defaultBgColor = palette.common.black;
    const defaultSelectedBgColor = palette.common.black;
    const defaultMinWidth = {
      md: 120,
    };
    const getTextColor = color => {
      if (Color(color).isLight()) return palette.text.primary;
      return palette.common.white;
    };
    return {
      root: ({
        bgColor = defaultBgColor,
        minWidth = defaultMinWidth,
      }) => ({
        opacity: 1,
        overflow: 'initial',
        color: palette.common.white,
        backgroundColor: bgColor,
        transition: '0.2s',
        [breakpoints.up('md')]: {
          minWidth: minWidth.md,
        },
        '&:before': {
          transition: '0.2s',
        },
        '&:not(:first-of-type)': {
          '&:before': {
            content: '" "',
            position: 'absolute',
            left: 0,
            display: 'block',
            height: 20,
            width: 1,
            zIndex: 1,
            //backgroundColor: palette.grey[300],
          },
        },
        '& + $selected:before': {
          opacity: 0,
        },
        '&:hover': {
           'color': 'inherit', /* blue colors for links too */
           'text-decoration': 'none', /* no underline */
          '&:not($selected)': {
            color: '#83E279',
            backgroundColor: Color(palette.primary.main)
              .fade(.15)
              .toString(),
          },
          '&::before': {
            opacity: 0,
          },
          '& + $root:before': {
            opacity: 0,
          },
        },
      }),
      selected: ({ selectedBgColor = defaultSelectedBgColor }) => ({
        fontFamily: `"Centuary Gothic", sans-serif`,
        fontWeight:900,
        backgroundColor: selectedBgColor,
        color: '#83E279',
        '& + $root': {
          zIndex: 1,
        },
        '& + $root:before': {
          opacity: 0,
        },
      }),
      wrapper: {
        zIndex: 2,
        textTransform: 'initial',
      },
    };
  });
  
  const ContainedTabs = ({ tabs, tabStyle, tabProps, ...props }) => {
    const tabsClasses = useTabsStyles(props);
    const tabClasses = useTabStyles({ ...tabProps, ...tabStyle });
    return (
      <Tabs {...props} classes={tabsClasses}>
        {tabs.map(tab => (
          <Tab key={tab.label} component={Link} to={tab.path} {...tabProps} {...tab} classes={tabClasses}/>
        ))}
        <a class="MuiButtonBase-root MuiTab-root makeStyles-root-2 makeStyles-root-5 MuiTab-textColorInherit Mui-selected makeStyles-selected-3 makeStyles-selected-6" target="_blank" tabindex="0" role="tab" aria-disabled="false" aria-selected="true" path="/" href="https://firebasestorage.googleapis.com/v0/b/portfolio-535ed.appspot.com/o/flamelink%2Fmedia%2FJanelynn%20Camingue%20Resume_%20WarnerMedia.pdf?alt=media&token=95080a2f-79dd-4249-9917-c5e4a28dfcc5" download><span class="MuiTab-wrapper makeStyles-wrapper-4">RESUME</span><span class="MuiTouchRipple-root"></span></a>
      </Tabs>
    );
  };
  
  ContainedTabs.propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
      }),
    ),
    tabStyle: PropTypes.shape({
      bgColor: PropTypes.string,
      minWidth: PropTypes.shape({}),
    }),
    tabProps: PropTypes.shape({}),
  };
  ContainedTabs.defaultProps = {
    tabs: [],
    tabStyle: {},
    tabProps: {},
  };
  
  export default ContainedTabs;
