import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
// import reqwest from 'reqwest';
import './Home.scss';
const reqwest = require('reqwest');

const count = 10;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class Home extends Component {
    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
    };
    componentDidMount() {
        this.getData(res => {
            this.setState({
                initLoading: false,
                data: res.results,
                list: res.results,
            });
        });
    }
    getData = (callback: (res: any)=> void) => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: (res: any) => {
                callback(res);
            },
        });
    };
    onLoadMore = () => {
        let _data: any = [...new Array(count)].map(() => ({ loading: true, name: {} }));
        this.setState({
            loading: true,
            list: this.state.data.concat(_data),
        });
        this.getData(res => {
            const data = this.state.data.concat(res.results);
            this.setState(
                {
                    data,
                    list: data,
                    loading: false,
                },
                () => {
                    // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                    // In real scene, you can using public method of react-virtualized:
                    // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                    window.dispatchEvent(new Event('resize'));
                },
            );
        });
    };

  render() {
      const { initLoading, loading, list } = this.state;
      const loadMore =
          !initLoading && !loading ? (
              <div
                  style={{
                      textAlign: 'center',
                      marginTop: 12,
                      height: 32,
                      lineHeight: '32px',
                  }}
              >
                  <Button onClick={this.onLoadMore}>loading more</Button>
              </div>
          ) : null;
    return (
      <div className="home">
          <List
              className="demo-loadmore-list"
              loading={initLoading}
              itemLayout="horizontal"
              loadMore={loadMore}
              dataSource={list}
              renderItem={(item: any) => (
                  <List.Item>
                      <Skeleton avatar title={false} loading={item.loading} active>
                          <List.Item.Meta
                              avatar={
                                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                              }
                              title={<a href="https://ant.design">{item.name.last}</a>}
                              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                      </Skeleton>
                  </List.Item>
              )}
          />
      </div>
    );
  }
}

export default Home;