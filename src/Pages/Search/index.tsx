import React, { useState } from "react";
import { Row, Col, Card } from "antd";
import Layout from "../../Components/Layout";
import { FileImageFilled } from "@ant-design/icons";

const SearchPage = () => {
  const [searchList, setSearchList] = useState([]);
  return (
    <Layout searchResultSet={setSearchList}>
      {searchList.map((item: any, index: any) => {
        return (
          <Row key={index} style={{ marginBottom: 20, backgroundColor: '#FFFFFF' }}>
            <Col span={4} style={{ textAlign: 'center', padding: 'auto', margin: 'auto' }}>
              <FileImageFilled style={{ fontSize: 48 }}/>
            </Col>
            <Col span={20}>
              <Card
                title={item.structured_formatting.main_text}
                bordered={false}
              >
                {item.structured_formatting.secondary_text}
              </Card>
            </Col>
          </Row>
        );
      })}
    </Layout>
  );
};

export default SearchPage;
