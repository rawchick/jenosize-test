import React, { useEffect, useState } from "react";
import { Layout, Menu, Row, Col, Input } from "antd";
import { Link, useLocation } from "react-router-dom";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import "react-google-places-autocomplete/dist/index.min.css";
import { SearchOutlined, FireFilled } from "@ant-design/icons";

const { Header } = Layout;

const searchInput = (setResult: any) => (
  <GooglePlacesAutocomplete
    onSelect={console.log}
    autocompletionRequest={{
      componentRestrictions: {
        country: ["th"]
      },
      types: ["establishment"]
    }}
    placeholder={`Search ...`}
    renderInput={props => {
      return <Input size="medium" prefix={<SearchOutlined />} {...props} />;
    }}
    renderSuggestions={(active, suggestions, onSelectSuggestion) =>
      setResult(suggestions)
    }
  />
);

const HeaderComponent = (props: any) => {
  const [selectedKey, setSelectedKey] = useState("");
  const location = useLocation();
  const setSearchResult = props.getResult;
  useEffect(() => {
    setSelectedKey(location.pathname);
  });
  return (
    <Header className="header">
      <Row>
        <Col span={1}>
          <FireFilled style={{ fontSize: 28, color: 'red' }}/>
        </Col>
        <Col span={3}>
          <h2 style={{ color: "#FFFFFF" }}>Jenosize Test</h2>
        </Col>
        <Col span={14}>
          <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]}>
            <Menu.Item key="/jenosize">
              Home
              <Link to={"/jenosize"} />
            </Menu.Item>
            <Menu.Item key="/jenosize/search">
              Search
              <Link to={"/jenosize/search"} />
            </Menu.Item>
            <Menu.Item key="/jenosize/map">
              Map
              <Link to={"/jenosize/map"} />
            </Menu.Item>
          </Menu>
        </Col>
        {selectedKey === `/jenosize/search` && (
          <Col span={6}>{searchInput(setSearchResult)}</Col>
        )}
      </Row>
    </Header>
  );
};

export default HeaderComponent;
