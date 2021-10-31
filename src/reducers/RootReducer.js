import { combineReducers } from "redux"

import {businessNewsLoading,businessNewsSuccess,businessNewsFailure,levelsFailure,levelsLoading,levelsSuccess} from './LearningReducer.js';
import {technologyNewsLoading,technologyNewsSuccess,technologyNewsFailure} from './TechnologyReducer.js';
import {refresherLoading,refresherSuccess,refresherFailure} from './RefresherReducer.js';
import {practiceLoading,practiceSuccess,practiceFailure} from './PracticeReducer.js';
import {libraryLoading,librarySuccess,libraryFailure} from './LibraryReducer';
import {userStore} from './UserReducer'


export default combineReducers({
    "learningData":businessNewsSuccess,
    "learningError":businessNewsFailure,
    "learningLoading":businessNewsLoading,
    "technologyNewsData":technologyNewsSuccess,
    "technologyNewsError":technologyNewsFailure,
    "technologyNewsLoading":technologyNewsLoading,
    "refresherLoading":refresherLoading,
    "refresherData":refresherSuccess,
    "refresherFailure":refresherFailure,
    "practiceLoading":practiceLoading,
    "practiceData":practiceSuccess,
    "practiceFailure":practiceFailure,
    "userData":userStore,
    "levelsData":levelsSuccess,
    "levelsLoading":levelsLoading,
    "levelsError":levelsFailure,
    "libraryData":librarySuccess,
    "libraryLoading":libraryLoading,
    "libraryFailure":libraryFailure
})