import React, { useEffect, useState } from 'react';
import { Drawer, Skeleton } from 'antd';
import useFetchData from './service';
import {connect} from 'react-redux'

const CareerDetails = ({ member, visible, onClose,team,age,born,batting,bowling}) => {

    const [details, setDetails] = useState({});
    const [isLoading, output] = useFetchData('./' + member.replace(' ', '_') + '.json');
    

    return (
        <Drawer
            destroyOnClose
            title={member}
            visible={visible}
            width={640}
            onClose={onClose}
        >
            <Skeleton active loading={isLoading} paragraph={{ rows: 4 }} >
                <div style={{ padding: 10 }}><p>Team - {team}</p>
                    <p>age - {age}</p>
                    <p>born - {born}</p>
                    <p>batting - {batting}</p>
                    <p>bowling - {bowling}</p>

                </div>
            </Skeleton>
        </Drawer>
    )
}
const mapStateToProps = state => { 
    return{
    player:state.users,
    player1:state.users1
    }
  }

export default connect(mapStateToProps)(CareerDetails);