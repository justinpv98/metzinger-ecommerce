import React from "react";
import PropTypes from "prop-types";
import * as styled from './Tab.styles'

function Tab({ activeTab, label, onClick }) {
  function onClickTab() {
    onClick(label);
  }

  function onKeyDownTab(e){
      if(e.keyCode === 32){
          onClick(label)
      }
  }

  let selected = label === activeTab;

  return (
    <styled.TabLabel
      selected={selected}
      role="presentation"
      onClick={onClickTab}
      onKeyDown={onKeyDownTab}
      tabIndex={0}
    >
      {label}
    </styled.TabLabel>
  );
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
