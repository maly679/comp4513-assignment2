import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Input, Space} from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const SearchContainer = (props) => {
  const { Search } = Input;
  const [title, updateTitle] = useState();

  const handleInputChange = e => {
    updateTitle(e.target.value);
  }

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  //<input type="text" id="title" placeholder="Search Play Here" onChange={handleInputChange}></input>

    return (
    <div id="searchContainer">

      <div id="homeTitleInput">
      <Space>
        <Search
        id="searchBarHome"
        placeholder="Search Play Here"
        size="large"
        suffix={suffix}
        onChange={handleInputChange}
      />
      </Space>
        
      </div>
      <div id="homeButtons">
      <Link to={{pathname:"/default", state: {title: title }}}>
        <div id="matchingButton">
          <button type="button" data-inline="true" >Show matching Plays</button>
        </div>
      </Link>
      <Link to={{pathname:"/default", state: {title: '' }}}>
        <div id="showAllButton">
          <button type="button" data-inline="true"  >Show All Plays</button>
        </div>
      </Link>
      </div>
    </div> 
  );
};

export default SearchContainer;