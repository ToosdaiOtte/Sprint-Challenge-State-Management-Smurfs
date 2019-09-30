import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../store/actions';
import Smurf from './Smurf';

const SmurfList = ({ getSmurf, smurfs, isFetching, error }) => {

    console.log(smurfs);

    useEffect(() => {
        // run action creator when component mounts
        getSmurf();
      }, [getSmurf]);
    
      if (isFetching) {
        return <h2>Fetching Smurfs!</h2>;
      }

    return(
        <div className='smurf-list'>
            <h2>Smurfs: </h2>
            <div className='smurfs'>
                {smurfs.map(smurf => (
                    <Smurf 
                        key={smurf.id} 
                        id={smurf.id} 
                        name={smurf.name} 
                        age={smurf.age}
                        height={smurf.height}    
                    />
                ))}
            </div>
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error

    }
}

export default connect(
    mapStateToProps,
    { getSmurf }
)(SmurfList);