import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";

const Page = ({ children }) => <Layout.Content>{children}</Layout.Content>;

export default Page;

Page.propTypes = {
  children: PropTypes.any
};

Page.defaultProps = {
  children: null
};
