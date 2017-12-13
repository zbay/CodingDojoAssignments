import React, { Component } from 'react';
import {connector} from '../Store';
import NewItem from './NewItem';

class Tabs extends Component{
    constructor(){
        super();
    }

    render(){
        let tabs = this.props.tabs.map((tab, idx) => {
            if(idx === 0){
                return (<li class="active" key={idx}><a data-toggle="tab" href={"#" + tab.title}>{tab.title}</a></li>)
            }
            else{
                return (<li key={idx}><a data-toggle="tab" href={"#" + tab.title}>{tab.title}</a></li>)
            }
        });
        let tabContents = this.props.tabs.map((tab, idx) => {
            let items = tab.items.map((item, idx) => {
                return (<li key={idx}>{item}</li>);
            });
            if(idx === 0){
                return (<div id={tab.title} class="tab-pane fade in active">
                    <ul>
                        {items}
                    </ul>
                    <NewItem id={tab.id}/>
                </div>);
            }
            else{
                return (<div id={tab.title} class="tab-pane fade in">
                <ul>
                    {items}
                </ul>
                <NewItem id={tab.id}/>
            </div>);
            }
        });
        return (
            <div>
                <ul class="nav nav-tabs">
                    {tabs}
                </ul>
                <div class="tab-content">
                    {tabContents}
                </div>
            </div>);
    }
}
export default connector(Tabs);