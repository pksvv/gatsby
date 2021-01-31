import React from 'react';
import Layout from "../../components/layout";
import { Link, graphql, StaticQuery } from 'gatsby';

const getImageData = graphql`{
    allFile{
      edges {
        node {
          relativePath
          extension
          size
          birthTime
        }
      }
    }
  }`

export default () => (
    <Layout>
    <div>
        <h1>Hello from Page 3 !</h1>
        <h3>Image Data</h3>
        <StaticQuery 
            query = {getImageData}
            render = {data => (
                <table>
                    <thead>
                        <th>Relative Path</th>
                        <th>Size</th>
                        <th>Extension</th>
                        <th>Birthtime</th>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map(({ node },index) => (
                            <tr key="index">
                                <td>{node.relativePath}</td>
                                <td>{node.size}</td>
                                <td>{node.extension}</td>
                                <td>{node.birthTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
            }
        />
        <Link to="/page-2">Go to page 2</Link>
    </div>
    </Layout>
)