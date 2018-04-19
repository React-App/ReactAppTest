import React, { Component }  from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import './Carousel.css'

class Carousels extends Component {

    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        this.setState({
            data: [
                'http://pic2.sc.chinaz.com/files/pic/pic9/201804/bpic6565.jpg',
                'http://pic1.sc.chinaz.com/files/pic/pic9/201804/zzpic11248.jpg',
                'http://img06.tooopen.com/images/20180419/tooopen_sy_239186012373.jpg'
            ],
        });
    }

    onClick(e, index) {
        e.stopPropagation()
        window.webkit.messageHandlers.HomeModel.postMessage({body: index})

    }

    render() {
        return(
            <WingBlank className="WingBlank">
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {
                        this.state.data.map(value => (
                            <img
                                src={value}
                                alt=""
                                height={this.state.imgHeight}
                                onClick={e => this.onClick(e,value)}
                            />
                        ))
                    }
                </Carousel>
            </WingBlank>
        )
    }
}

export default Carousels;