import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';

import { PostDateProps } from '../services';

const PostDate: React.FunctionComponent<PostDateProps> = ({ timestamp }) => {
  let postPeriod = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    postPeriod = `${timePeriod} ago`;
  }
  return (
    <>
      <span className="">{postPeriod}</span>
    </>
  );
};

export default PostDate;
