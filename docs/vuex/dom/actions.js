import {
  ZVUETITLE,
  ZVUEDESCRIPTION,
  ZVUEKEYWORDS,
} from '../mutation-types';

const updateTitle = ({
  commit
}, title) => {
  commit(ZVUETITLE, title);
};

const updateDescription = ({
  commit
}, description) => {
  commit(ZVUEDESCRIPTION, description);
};

const updateKeywords = ({
  commit
}, keywords) => {
  commit(ZVUEKEYWORDS, keywords);
};

export default {
  updateTitle,
  updateDescription,
  updateKeywords,
};
