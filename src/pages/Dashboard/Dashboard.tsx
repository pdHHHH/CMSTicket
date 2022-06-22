import DateTimePicker from 'components/DateTimePicker';
import { EDisplayMode } from 'components/DateTimePicker/DateTimePicker';
import Graph from 'layouts/components/Graph';
import Piechart from 'layouts/components/Piechart';
import React from 'react';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
    return (
        <div className="app__dashboard">
            <div className="label">Thống kê</div>
            <div className="line-graph__filter">
                <div className="line-graph__filter__label">Doanh thu</div>
                <div className="line-graph__filter__picker"><DateTimePicker displayMode={EDisplayMode.my} date={new Date()}/></div>
            </div>
            <div className="line-graph">
                <Graph />
            </div>
            <div className="week-revenue-label">Tổng doanh thu theo tuần</div>
            <div className="week-revenue">545.145.000</div>
            <div className="pie-charts">
                <DateTimePicker displayMode={EDisplayMode.my} date={new Date()}/>
                <Piechart label='Gói gia đình'/>
                <Piechart label='Gói sự kiện'/>
                <div className="pie-charts__labels">
                    <span>Vé đã sử dụng</span>
                    <span>Vé chưa sử dụng</span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
