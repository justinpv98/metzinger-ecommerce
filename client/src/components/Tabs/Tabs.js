import React, {useState} from "react";
import PropTypes from "prop-types";
import * as styled from './Tabs.styles'


import Tab from "../Tab/Tab";

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  function onClick(tab) {
    setActiveTab(tab);
  }

  //map children elements into Tab components
  return (
    <styled.TabsContainer>
      <styled.TabList role="tablist">
        {children.map((child) => {
          const { label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClick}
            />
          );
        })}
      </styled.TabList>
      <styled.TabContent>
        {children.map((child) => {
          return child.props.label !== activeTab ? undefined: child.props.children;
        })}
      </styled.TabContent>
    </styled.TabsContainer>
  );
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default Tabs;
