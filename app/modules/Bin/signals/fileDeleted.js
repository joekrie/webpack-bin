import set from 'cerebral-addons/set';
import deleteFile from '../actions/deleteFile';

export default [
  deleteFile,
  set('state:/bin.showDeleteFileModal', false)
];
