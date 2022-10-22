import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_current_location': 
      return {...state,currentLocation:action.payload};
    case 'add_location': 
      return {...state,locations:[...state.locations,action.payload],currentLocation:action.payload};
    case 'start_record': 
      return {...state,recording:true};
    case 'stop_record': 
      return {...state,recording:false};
    case 'reset_tracks': 
      return {...state,locations:[]};
    default:
      return state;
  }
};

const startRecording = dispatch => () => {
  dispatch({type:'start_record'});
};
const resetTracks = dispatch => () => {
  dispatch({type:'reset_tracks'});
};

const stopRecording = dispatch => () => {
  dispatch({type:'stop_record'});
};
const addLocation = dispatch => (location,recording) => {
  if(recording){
    dispatch({type: 'add_location',payload:location});
  }
  else{
    dispatch({type: 'add_current_location',payload:location});
  }
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation,resetTracks},
  { recording: false, locations: [], currentLocation: null }
);
