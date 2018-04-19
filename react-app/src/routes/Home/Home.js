import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import ListView from 'antd-mobile/lib/list-view'


const data = ['Flex布局', 'WingBlank 两翼留白', 'WhiteSpace 上下留白']
const NUM_SECTIONS = 1;
const NUM_ROWS_PER_SECTION = data.length;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];

function genData(pIndex = 0) {
    for (let i = 0; i< NUM_SECTIONS; i++) {
        const ii = pIndex * NUM_SECTIONS + i;
        const sectionName = `Section ${ii}`;
        sectionIDs.push(sectionName);
        dataBlobs[sectionName] = sectionName;
        rowIDs[ii] = [];

        for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
            const rowName = `S${ii}, R${jj}`;
            rowIDs[ii].push(rowName);
            dataBlobs[rowName] = rowName;
        }
    }
    sectionIDs = [...sectionIDs];
    rowIDs = [...rowIDs];
}

class Home extends Component {

    constructor(props) {
        super(props);
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        })

        this.state = {
            dataSource,
            isLoading: true,
            height: document.documentElement.clientHeight * 3 / 4,
        }
    }

    componentDidMount() {

        const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
        genData();
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
            isLoading: false,
            height: hei,
        });
    }

    cellClick() {
        alert('123')
    }

    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 1,
                }}
            />
        );

        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];

            return (
                <div key={rowID} style={{padding: '0 15px'}}>
                    <div style={{display: '-webkit-box', display: 'flex', padding: '15px 0'}} onClick={this.cellClick}>
                        <div>{obj}</div>
                    </div>
                </div>
            );
        }

        return (
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderRow={row}
                renderSeparator={separator}
                style={{
                    height: this.state.height,
                    overflow: 'auto',
                }}
                // 每次事件循环（每帧）渲染的行数
                pageSize={4}
                // 在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用scrollEventThrottle属性来控制。
                onScroll={() => { console.log('scroll'); }}
                // 调用onEndReached之前的临界值，单位是像素
                onEndReachedThreshold={10}

            />
        );
    }
}

export default Home;
